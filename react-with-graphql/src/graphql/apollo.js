import ApolloClient from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { RetryLink } from 'apollo-link-retry';

import introspectionQueryResultData from '@/graphql/fragmentTypes.json';
import { localState, typeDefs, resolvers } from '@/graphql/localState';

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

const link = new HttpLink({
  uri: endPoint,
  // Is set to same-origin by default.
  // This option can be used to indicate whether the user agent should send cookies with requests.
  // See Request.
  // credentials for more details.
  credentials: 'omit',
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

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([link, retryLink]),
  // Any options you would like to pass to fetch (credentials, headers, etc).
  // These options are static, so they don't change on each request.
  fetchOptions: {},
  // This function is called on each request.
  // It takes a GraphQL operation and can return a promise.
  // To dynamically set fetchOptions, you can add them to the context of the operation with operation.
  // setContext({ headers }).
  // Any options set here will take precedence over fetchOptions.
  // Useful for authentication.
  request: operation => {
    console.log(operation);
  },
  // We include a default error handler to log out your errors to the console.
  // If you would like to handle your errors differently, specify this function.
  onError: ({ graphQLErrors, networkError, response, operation }) => {
    console.log(graphQLErrors, networkError, response, operation);
  },
  resolvers,
  typeDefs,
  // A map of functions to redirect a query to another entry in the cache before a request takes place.
  // This is useful if you have a list of items and want to use the data from the list query
  // on a detail page where you're querying an individual item. More on that here.
  cacheRedirects: {},
  // Header key/value pairs to pass along with the request.
  headers: {},
  // A custom instance of ApolloCache to be used.
  // The default value is InMemoryCache from apollo-cache-inmemory.
  // This option is quite useful for using a custom cache with apollo-cache-persist.
  cache,
  // Set this to true to allow the Apollo Client Devtools 
  // Chrome extension to connect to your application's Apollo Client in production. 
  // (This connection is allowed automatically in dev mode.)
  connectToDevTools: isConnectDevtool,
  // Set this to false to force all created queries to be sent to the server, 
  // even if a query with completely identical parameters (query, variables, operationName) is already in flight.
  queryDeduplication: false,
  // Provide this object to set application-wide default values for options 
  // you can provide to the watchQuery, query, and mutate functions. See below for an example object.
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    },
  }
});

cache.writeData({ data: localState });