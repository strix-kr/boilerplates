import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation ($email: String) {
    login(email: $email) @client
  }
`;

export const LOGOUT = gql`
  mutation {
    logout @client
  }
`;

export const changeLoading = gql`
  mutation ($loading: Boolean!) {
    changeLoading(loading: $loading) @client
  }
`;