import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './registerAntVue';

import { router } from './router';
import { store } from '@/store';
// import global style
import './styles/app.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
