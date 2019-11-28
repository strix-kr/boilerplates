<template>
  <a-locale-provider :locale="locale">
    <transition name="fade">
      <router-view/>
    </transition>
  </a-locale-provider>
</template>

<script>
// locale을 설정합니다.
import moment from 'moment';
import koKR from 'ant-design-vue/lib/locale-provider/ko_KR';

moment.locale('ko');

export default {
  name: 'App',
  data() {
    return {
      locale: koKR,
    };
  },
};
</script>
