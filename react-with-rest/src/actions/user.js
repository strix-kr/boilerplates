export const CREATE = 'createUser';
export const UPDATE = 'updateUser';
export const CREATE_ASYNC = 'createUserAsync';
export const UPDATE_ASYNC = 'updateUserAsync';

export const create = () => {
  return {
    type: CREATE,
  };
};

export const update = payload => {
  return {
    type: UPDATE,
    payload,
  };
};

export const createAsync = payload => {
  return {
    type: CREATE_ASYNC,
    payload,
  };
};

export const updateAsync = payload => {
  return {
    type: UPDATE_ASYNC,
    payload,
  };
};
