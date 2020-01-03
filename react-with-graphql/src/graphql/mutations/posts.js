import gql from 'graphql-tag';

export const CREATE_POST = gql`
  mutation ($id: Int!, $title: String!, $body: String!) {
    createPost(userId: 0, id: $id, title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

export const UDPATE_POST = gql`
  mutation ($id: Int!, $title: String!, $body: String!) {
    updatePost(userId: 0, id: $id, title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

export const REMOVE_POST = gql`
  mutation ($id: Int!) {
    removePost(id: $id)
  }
`;