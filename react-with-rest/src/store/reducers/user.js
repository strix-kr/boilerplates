import { user } from '@/store/actions';

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case user.CREATE:
    case user.UPDATE: {
      const { id } = payload;
      const users = { ...state.users };
      users[id] = payload;
      return {
        ...state,
        ...users,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
