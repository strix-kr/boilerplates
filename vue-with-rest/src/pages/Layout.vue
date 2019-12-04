<template>
  <a-layout id="app">
    <header-wrap />
    <navigation />

    <a-layout-content>
        <!-- switch router -->
        <!-- GlobalRouterView -->
        <transition>
            <router-view></router-view>
        </transition>
    </a-layout-content>

    <footer-wrap />
    <spinner :loading="loading" />
  </a-layout>
</template>

<script>
// @ is an alias to /src
import { Header, Footer, Navigation } from '@/layouts';
import { Spinner } from '@/components/commons';

export default {
  name: 'Layout',
  components: {
    'header-wrap': Header,
    'footer-wrap': Footer,
    navigation: Navigation,
    spinner: Spinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.loading = true;
    next();
    this.$nextTick(() => {
      this.loading = false;
    });
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const self = vm;
      self.loading = true;
      self.$nextTick(() => {
        self.loading = false;
      });
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
