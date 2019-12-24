export const SET_ITEMS = 'setFetchData';
export const FETCH_DATA_ASYNC = 'getFetchDataAsync';
export const SET_COMMENTS = 'setCommentFetchData';
export const ADD_ITEM = 'addNewFetchDataToState';
export const UPDATE_ITEMS = 'setFetchDataToState';
export const DELETE_ITEM = 'deleteFetchDataFromState';
export const UPDATE_COMMENT = 'sethildFetchDatatoState';
export const INIT_ITEMS = 'initFetchData';

export const initItems = () => {
  return {
    type: INIT_ITEMS,
  };
};

export const setItems = payload => {
  return {
    type: SET_ITEMS,
    payload,
  };
};

export const fetchDataAsync = payload => {
  return {
    type: FETCH_DATA_ASYNC,
    payload,
  };
};

export const setComments = payload => {
  return {
    type: SET_COMMENTS,
    payload,
  };
};

export const addItem = payload => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const updateItems = payload => {
  return {
    type: UPDATE_ITEMS,
    payload,
  };
};

export const deleteItem = payload => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};

export const updateComment = payload => {
  return {
    type: UPDATE_COMMENT,
    payload,
  };
};
