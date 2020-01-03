export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const LOADING_BEGIN = 'loadingBegin';
export const LOADING_END = 'loadingEnd';

export const login = payload => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loadingBegin = () => {
  return {
    type: LOADING_BEGIN,
  };
};

export const loadingEnd = () => {
  return {
    type: LOADING_END,
  };
};
