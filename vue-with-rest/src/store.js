import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';
import { Fetcher, service } from '@/configs';

Vue.use(Vuex);

const isProduction = process.env.VUE_APP_ENV === 'production';

const type = {
  UPDATE_USER: 'updateUser',
  ADD_ITEM: 'addNewFetchData',
  UPDATE_POST_ITEMS: 'setFetchDataToState',
  UPDATE_COMMENT_ITEMS: 'setChildFetchDataToState',
  DELETE_ITEM: 'deleteDataFromState',
  USER_LOGIN: 'login',
  USER_LOGOUT: 'logout',
  TOGGLE_LOADING: 'showAndHideLoading',
};

const initialState = () => ({
  users: service.getValue(localStorage, 'users', {}),
  currentUserId: null,
  fetchData: {},
  isLogIn: false,
  status: {
    isLoading: false,
  },
});

const store = new Vuex.Store({
  plugins: [createPersistedState()].concat(isProduction ? [] : [createLogger()]),
  state: initialState(),
  getters: {
    comments: state => postId => state.fetchData.comments[postId],
    currentUser(state) {
      return state.users[state.currentUserId];
    },
    // change get by Emails
    user: state => id => state.users[id],
    isAvailableAccount: (_, ctx) => (email, password) => {
      const user = ctx.user(email);
      return !!((user && user.password === password));
    },
    maxId: state => () => {
      const item = state.fetchData.posts.sort((a, b) => b.id - a.id)[0];
      return (item) ? item.id + 1 : 1;
    },
    currentState(state, ctx) {
      const newState = {
        user: ctx.currentUser,
        isLogin: state.isLogin,
        isLoading: state.status.isLoading,
      };
      return newState;
    },
  },
  mutations: {
    [type.UPDATE_USER](state, args) {
      state.users[args.email] = { ...args };
    },
    [type.ADD_ITEM](state, payload) {
      state.fetchData.posts.unshift({
        ...payload,
        id: this.getters.maxId(),
      });
    },
    [type.UPDATE_POST_ITEMS](state, payload) {
      state.fetchData.posts = payload;
    },
    [type.UPDATE_COMMENT_ITEMS](state, payload) {
      state.fetchData.comments = payload;
    },
    [type.DELETE_ITEM](state, id) {
      const index = state.fetchData.posts.findIndex(obj => obj.id === id);
      state.fetchData.posts.splice(index, 1);
    },
    [type.USER_LOGIN](state, { email, password }) {
      if (this.getters.isAvailableAccount(email, password)) {
        state.isLogIn = true;
        state.currentUserId = email;
      }
    },
    [type.USER_LOGOUT](state) {
      state.isLogIn = false;
      state.isLoading = false;
      state.currentUserId = null;
      state.fetchData = {};
    },
    [type.TOGGLE_LOADING](state) {
      state.status.isLoading = !state.status.isLoading;
    },
  },
  actions: {
    createUser(ctx, args) {
      const params = args;
      params.method = 'post';
      return ctx.dispatch('updateUser', params);
    },
    updateUser(ctx, args) {
      const { url, param, method = 'put' } = args;
      return Fetcher[method](url, param)
        .then((res) => {
          if (res.status !== 201 && res.status !== 200) {
            return Promise.reject(res);
          }

          const { data } = res;
          delete data.id;
          ctx.commit(type.UPDATE_USER, data);
          return res;
        });
    },

  },
});

export {
  store,
  type,
};
