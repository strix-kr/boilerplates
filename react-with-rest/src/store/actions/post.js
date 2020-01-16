import { postsTypes } from '@/store/types'

export const initItems = () => {
  return {
    type: postsTypes.INIT_ITEMS,
  };
};

export const setItems = payload => {
  return {
    type: postsTypes.SET_ITEMS,
    payload,
  };
};

export const fetchDataAsync = payload => {
  console.log('payload', payload);
  return {
    type: postsTypes.FETCH_DATA_ASYNC,
    payload,
  };
};

export const setComments = payload => {
  return {
    type: postsTypes.SET_COMMENTS,
    payload,
  };
};

export const addItem = payload => {
  return {
    type: postsTypes.ADD_ITEM,
    payload,
  };
};

export const updateItems = payload => {
  return {
    type: postsTypes.UPDATE_ITEMS,
    payload,
  };
};

export const deleteItem = payload => {
  return {
    type: postsTypes.DELETE_ITEM,
    payload,
  };
};

export const updateComment = payload => {
  return {
    type: postsTypes.UPDATE_COMMENT,
    payload,
  };
};
