import { post } from '@/actions';

const getPostsMaxId = state => {
  const item = state.posts.sort((a, b) => b.id - a.id)[0];
  return item ? item.id + 1 : 1;
};

const postReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case post.INIT_ITEMS: {
      return {};
    }
    case post.SET_ITEMS: {
      return {
        ...state,
        posts: [...payload],
      };
    }
    case post.SET_COMMENTS: {
      return {
        ...state,
        comments: { ...payload },
      };
    }
    case post.ADD_ITEM: {
      const posts = [...state.posts];
      posts.unshift({ ...payload, id: getPostsMaxId(state) });
      return {
        ...state,
        posts,
      };
    }

    case post.UPDATE_ITEMS: {
      const posts = [...payload];
      return {
        ...state,
        posts,
      };
    }

    case post.DELETE_ITEM: {
      const { id } = payload;
      const index = state.posts.findIndex(obj => obj.id === id);
      const posts = [...state.posts].splice(index, 1);
      return {
        ...state,
        posts,
      };
    }

    case post.UPDATE_COMMENT: {
      const comments = [...payload];
      return {
        ...state,
        comments,
      };
    }

    default: {
      return state;
    }
  }
};

export default postReducer;
