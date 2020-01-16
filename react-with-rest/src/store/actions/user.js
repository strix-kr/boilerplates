import { userTypes } from '@/store/types';

export const create = () => {
  return {
    type: userTypes.CREATE,
  };
};

export const update = payload => {
  return {
    type: userTypes.UPDATE,
    payload,
  };
};

export const createAsync = payload => {
  return {
    type: userTypes.CREATE_ASYNC,
    payload,
  };
};

export const updateAsync = payload => {
  return {
    type: userTypes.UPDATE_ASYNC,
    payload,
  };
};
