import ApolloClient from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import { RetryLink } from 'apollo-link-retry';
import introspectionQueryResultData from '@/graphql/introspection.json';
// import { localState, typeDefs, resolvers } from '@/graphql/localState';

import packageJson from '../../package.json';
import { service } from '@/configs';

const env = process.env.NODE_ENV;
const isProduction = ( env === 'production' );
const isConnectDevtool = !isProduction;

// setting endpoint from package.json
const endPoint = service.getValue(
  packageJson,
  `graphqlConfig.${env || 'development'}.endPoint`,
);

// 이 보일러 플레이트는 faek data를 사용하기 때문에 introspectionQueryResultData는 없어도 무방합니다.
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const httpLink = new HttpLink({
  uri: endPoint,
  // Is set to same-origin by default.
  // This option can be used to indicate whether the user agent should send cookies with requests.
  // See Request.
  // credentials for more details.
  credentials: 'omit',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
      authorization: "test@test.com"
    }
  }
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: 1000,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf: error => !!error,
  },
});

const cache = new InMemoryCache({
  // Indicates whether to add __typename to the document (default: true)
  addTypename: false,
  // A function that takes a data object and returns a unique identifier to be used
  // when normalizing the data in the store.
  // Learn more about how to customize dataIdFromObject in Custom identifiers(https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces).
  dataIdFromObject: null,
  // By default, the InMemoryCache uses a heuristic fragment matcher.
  // If you are using fragments on unions and interfaces,
  // you will need to use an IntrospectionFragmentMatcher.
  // For more information, please read our guide to setting up fragment matching for unions & interfaces.
  fragmentMatcher,
  // A map of functions to redirect a query to another entry in the cache before a request takes place.
  // This is useful if you have a list of items and want to use the data from the list query
  // on a detail page where you're querying an individual item.
  // More on that here.
  cacheRedirects: {},
});

// refs: https://www.apollographql.com/docs/react/api/apollo-client/
const apolloClient = new ApolloClient({
  ssrMode: false,
  connectToDevTools: isConnectDevtool,
  link: ApolloLink.from([authLink, retryLink, httpLink]),
  resolvers: {},
  typeDefs: {},
  // A custom instance of ApolloCache to be used.
  // The default value is InMemoryCache from apollo-cache-inmemory.
  // This option is quite useful for using a custom cache with apollo-cache-persist.
  cache,
  queryDeduplication: false,
  // Provide this object to set application-wide default values for options 
  // you can provide to the watchQuery, query, and mutate functions. See below for an example object.
  defaultOptions: {
    watchQuery: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  }
});

export {
  apolloClient
}