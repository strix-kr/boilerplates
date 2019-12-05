import gql from 'graphql-tag';

const initialState = {
  isLoggedIn: false,
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
      const data = { loading };
      cache.writeData({ data });
    },
    onChangeLogInState: (_root, { isLoggedIn }, { cache}) => {
      const data = { isLoggedIn };
      cache.writeData({ data });
    },
  },
};

export {
  initialState,
  typeDefs,
  resolvers,
};
