import { status } from '@/store/actions';

const statusReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case status.LOGIN: {
      const { id } = payload;
      return {
        ...state,
        isLogin: true,
        currentUserId: id,
      };
    }

    case status.LOGOUT: {
      return {
        ...state,
        currentUserId: null,
        isLogin: false,
      };
    }

    case status.LOADING_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case status.LOADING_END: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default statusReducer;
