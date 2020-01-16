import { statusTypes } from '@/store/types'

export const login = payload => {
  return {
    type: statusTypes.LOGIN,
    payload,
  };
};

export const logout = () => {
  return {
    type: statusTypes.LOGOUT,
  };
};

export const loadingBegin = () => {
  return {
    type: statusTypes.LOADING_BEGIN,
  };
};

export const loadingEnd = () => {
  return {
    type: statusTypes.LOADING_END,
  };
};