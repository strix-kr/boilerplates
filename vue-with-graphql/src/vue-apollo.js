import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createApolloClient } from 'apollo';

Vue.use(VueApollo);

const httpEndpoint = 'https://graphqlzero.almansi.me/api';
const cache = new InMemoryCache();

const defaultOptions = {
  // URL to the HTTP API
  httpEndpoint,
  // Url to the Websocket API
  wsEndpoint: null,
  // Token used in localstorage
  tokenName: null,
  // Enable this if you use Query persisting with Apollo Engine
  persisting: false,
  // Or, advanced persisting options, see https://github.com/apollographql/apollo-link-persisted-queries#options
  // Example:
  // persisting: {
  //  generateHash: query => sha256()
  //    .update(print(query))
  //    .digest('hex'),
  // },
  // Is currently Server-Side Rendering or not
  ssr: false,
  // Only use Websocket for all requests (including queries and mutations)
  websocketsOnly: false,
  // Custom starting link.
  // If you want to replace the default HttpLink, set `defaultHttpLink` to false
  link: null,
  // If true, add the default HttpLink.
  // Disable it if you want to replace it with a terminating link using `link` option.
  defaultHttpLink: true,
  // Options for the default HttpLink
  httpLinkOptions: {},
  // Custom Apollo cache implementation (default is apollo-cache-inmemory)
  cache,
  // Options for the default cache
  inMemoryCacheOptions: {},
  // Additional Apollo client options
  apollo: {},
  // apollo-link-state options
  clientState: null,
  // Function returning Authorization header token
  getAuth: null,
};


export function createApolloProvider(options = {}) {
  const apolloClient = createApolloClient({
    ...defaultOptions,
    ...options,
  });

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,

  });

  return apolloProvider;
}
