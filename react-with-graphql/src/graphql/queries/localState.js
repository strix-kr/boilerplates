import gql from 'graphql-tag';


export const GET_LOCAL_STATE = gql`
  query {
    users @client {
      id
      name
      email
      password
      gender
      country
      birth
    }
    status @client {
      isLogin
      isLoading
      currentUserId
    }
  }
`;

export const GET_STATUS = gql`
  query {
    status @client {
      isLogin
      isLoading
      currentUserId
    }
  }
`;

export const GET_COMMENTS_BY_ID = gql`
  query ($postId: Int) {
    commentsById (postId: $postId) @client
  }
`;