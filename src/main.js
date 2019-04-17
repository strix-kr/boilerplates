import 'babel-polyfill'

import Vue from 'vue'
import { router } from './router/index'
import { createProvider } from './vue-apollo'
import firebase from 'firebase/app'
import { appSetting } from '@/configs'
import moment from 'moment'
import 'moment/locale/ko'

import '@/registerServiceWorker'
import '@/registerAntFramework'

import App from '@/App.vue'

import './styles/app.scss'

const config = {
  apiKey: appSetting.VUE_APP_FIREBASE_KEY,
  authDomain: 'strix-co-kr.firebaseapp.com',
  databaseURL: 'https://strix-co-kr.firebaseio.com',
  projectId: 'strix-co-kr',
  storageBucket: 'strix-co-kr.appspot.com',
  messagingSenderId: '507394026556'
}

firebase.initializeApp(config)
moment.locale('ko')


Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
