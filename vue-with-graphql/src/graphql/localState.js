import gql from 'graphql-tag';

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  loading: false,
};

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    loading: Boolean!
  }
`;

const resolvers = {
  Mutation: {
    onChangeLoading: (_root, { loading }, { cache }) => {
      // console.log('loading', loading)
      // console.log('cache', cache)
      const data = { loading };
      // console.log('data', data)
      cache.writeData({ data });
    },
  },
};

export {
  initialState,
  typeDefs,
  resolvers,
};
