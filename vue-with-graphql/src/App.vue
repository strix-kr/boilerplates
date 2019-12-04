<template>
  <div>
    <a-locale-provider :locale="locale">
      <transition name="fade">
        <router-view/>
      </transition>
    </a-locale-provider>
    <spinner :loading="loading" />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

// locale을 설정합니다.
import moment from 'moment';
import koKR from 'ant-design-vue/lib/locale-provider/ko_KR';

import { Spinner } from '@/components/commons';

moment.locale('ko');

export default {
  name: 'App',
  components: {
    spinner: Spinner,
  },
  data() {
    return {
      locale: koKR,
      loading: false,
    };
  },
  mounted() {
    // firebase 유저인증 handler
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return user.getIdToken(false)
          .then((token) => {
            localStorage.setItem('token', token);
            return true;
          })
          .then(() => {
            if (this.$route.path === '/login') {
              return this.$router.push({
                name: 'HomeContents',
              });
            }
            return true;
          })
          .catch((err) => {
            console.log('routePathError', err);
            return true;
          });
      }
      if (this.$route.path !== '/login') {
        return this.$router.replace({
          path: '/login',
        });
      }
      return true;
    });
  },
};
</script>
