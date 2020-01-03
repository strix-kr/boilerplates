import gql from 'graphql-tag';
import { GET_LOCAL_STATE } from '@/graphql/queries/localState';
import { ALL_COMMENTS } from '@/graphql/queries/posts';

// default user
const tempUser = {
  id: 1,
  name: 'test',
  email: 'test',
  password: '1',
  gender: 'M',
  country: 'KR',
  birth: '2019-12-26',
};

const localState = {
  users: [tempUser],
  allPosts: [],
  allComments: [],
  status: {
    isLogin: false,
    isLoading: false,
    currentUserId: null,
  },
};

const typeDefs = gql`
  extend type Query {
    users: [User]
    allPosts: [Post]
    allComments: [Comment]
    status: localStatus
  }

  extend type User {
    id: ID!
    name: String
    email: String
    password: String
    gender: String
    country: String
    birth: String
  }

  extend type Post {
    id: ID!
    title: String
    body: String
  }

  extend type Comment {
    id: ID!
    postId: Int
    title: String
    email: String
    body: String
  }

  extend type localStatus {
    isLogin: Boolean
    isLoding: Boolean
    currentUserId: Int
  }
`;

const resolvers = {
  Query: {
    commentsById(_root, { postId }, { cache }) {
      const { allComments } = cache.readQuery({ query: ALL_COMMENTS });
      const comparePostId = postId/1;
      return allComments.filter(comment => comment.postId === comparePostId);
    }
  },
  Mutation: {
    login: (rootQuery, { email }, { cache }) => {
      const { users } = cache.readQuery({ query: GET_LOCAL_STATE });
      const { id } = Object.values(users).find(obj => obj.email === email);
      cache.writeData({
        data: {
          status: {
            isLogin: true,
            isLoading: false,
            currentUserId: id,
          },
        },
      });
    },
    logout: (rootQuery, args, { cache }) => {
      cache.writeData({
        data: {
          status: {
            isLogin: false,
            isLoading: false,
            currentUserId: null,
          },
        },
      });
    },
  },
};

export { localState, typeDefs, resolvers };
