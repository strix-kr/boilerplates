import Vue from 'vue';

import { Modal } from 'ant-design-vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import firebase from 'firebase/app';
import 'firebase/auth';

import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { RetryLink } from 'apollo-link-retry';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import introspectionQueryResultData from '@/graphql/fragmentTypes.json';
import { initialState, typeDefs, resolvers } from './localState';
import ChangeLoading from './mutations/ChangeLoading.gql';
import ChangeLoggedState from './mutations/ChangeLoggedState.gql';

import packageJson from '../../package.json';
import { service } from '@/configs';

// Install the vue plugin
Vue.use(VueApollo);

export function errorLog(error) {
  // eslint-disable-next-line no-console
  console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message || '');
}

export function reFreshToken() {
  // 401 인증에러시 firebase.auth().currentUser
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken(true).then(token => localStorage.setItem('token', token));
    } else {
      localStorage.setItem('token', null);
    }
  });
}

export function mutationErrorHandler(error) {
  console.log('mutationErrorHandler', error);
}

export async function logout(apolloClient = null) {
  if (!apolloClient) {
    return true;
  }
  apolloClient.stop();

  return firebase.auth().signOut()
    .then(() => {
      apolloClient.mutate({
        mutation: ChangeLoggedState,
        variables: {
          isLoggedIn: false
        }
      })
      localStorage.setItem('token', null);
    })
    .then(() => {
      apolloClient.resetStore();
    });
}

// setting endpoint from package.json
const endPoint = service.getValue(packageJson, `graphqlConfig.${process.env.VUE_APP_ENV || 'development'}.endPoint`)

// HTTP connection to the API
const httpLink = createUploadLink({
  // You should use an absolute URL here
  uri: `${endPoint}/graphql`,
  credentials: 'omit',
});

// fragmentMatcher
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

// authLink for header authorization
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// retryLink refs: https://www.apollographql.com/docs/link/links/retry/#gatsby-focus-wrapper
const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: 1000,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf(error) {
      // retry 예외처리 할 operation을 지정할 수 있다.
      // if (_operation.operationName === 'Viewer') {
      //   return false
      // }

      // token 갱신
      if (error.response && error.response.status === 401) {
        reFreshToken();
      }
      return !!error;
    },
  },
});

// Cache implementation
const cache = new InMemoryCache({ fragmentMatcher });

export function createProvider() {

  // firebase init 후에 로그인 상태를 localState에 추가 
  const data = {
    ...initialState,
    isLoggedIn: !!firebase.auth().currentUser
  }

  // Local Cache init
  cache.writeData({ data });

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: ApolloLink.from([authLink, retryLink, httpLink]),
    cache,
    queryDeduplication: false,
    connectToDevTools: true,
    typeDefs,
    resolvers,
  });

  apolloClient.onResetStore(() => cache.writeData({ data }));

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $watchQuery: {
        loadingKey: 'loading',
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
      },
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
      $mutate: {
        loadingKey: 'loading',
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
    // // Watch loading state for all queries
    // // See 'Smart Query > options > watchLoading' for detail
    async watchLoading(isLoading) {
      await apolloClient.mutate({
        mutation: ChangeLoading,
        variables: {
          loading: isLoading,
        },
      });
    },
    // Global error handler for all smart queries and subscriptions
    errorHandler(error) {
      // retry 후에도 에러가 발생하면 errorHandler에 도달
      // apollo cache를 reset하고 logout시킨다.
      errorLog(error);
      console.log('G error', error);
      // 기존의 modal 삭제
      Modal.destroyAll();

      if (error.networkError && error.networkError.statusCode === 401) {
        Modal.error({
          title: '권한이 없습니다.',
          content: error.message,
          onOk: () => logout(apolloClient),
        });
      } else {
        Modal.error({
          title: '에러가 발생했습니다.',
          content: error.message,
        });
      }
    },
    // Globally turn off prefetch ssr
    prefetch: false,
  });

  return apolloProvider;
}
