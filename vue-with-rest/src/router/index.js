import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '@/store';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.path !== '/login' && !store.state.isLogIn) {
    next('/login');
  }
  next();
});

export {
  router,
  routes,
};
