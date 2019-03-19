import Vue from 'vue'
import router from './router'
import { createProvider } from './vue-apollo'
import firebase from 'firebase/app'
import { appSetting } from './configs'

import './registerServiceWorker'
import './registerAntFramework'

import App from './App.vue'

const config = {
  apiKey: appSetting[`VUE_APP_FIREBASE_KEY_${process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV'}`],
  authDomain: "strix-co-kr.firebaseapp.com",
  databaseURL: "https://strix-co-kr.firebaseio.com",
  projectId: "strix-co-kr",
  storageBucket: "strix-co-kr.appspot.com",
  messagingSenderId: "507394026556"
}

firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
