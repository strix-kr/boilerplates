import Vue from 'vue';
import firebase from 'firebase/app';

import { createProvider } from '@/graphql/apollo';

import App from './App.vue';
import { service } from '@/configs';
import './registerServiceWorker';
import './registerAntVue';
import packageJson from '../package.json';

import { router } from './router';
// import global style
import './styles/app.scss';

const firebaseConfig = {
  ...service.getValue(packageJson, `firebaseConfig.${process.env.VUE_APP_ENV || 'development'}`, {}),
};

// init firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider({}),
  render: h => h(App),
}).$mount('#app');
