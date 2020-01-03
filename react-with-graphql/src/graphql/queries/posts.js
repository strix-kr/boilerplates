import gql from 'graphql-tag';

export const ALL_POSTS = gql`
  query {
    allPosts {
      id
      title
      body
    }
  }
`;

export const ALL_COMMENTS = gql`
  query {
    allComments {
      id
      postId
      name
      email
      body
    }
  }
`;