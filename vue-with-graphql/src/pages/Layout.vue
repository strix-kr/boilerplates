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
  </a-layout>
</template>

<script>
// @ is an alias to /src
import { Header, Footer, Navigation } from '@/layouts';


export default {
  name: 'Layout',
  components: {
    'header-wrap': Header,
    'footer-wrap': Footer,
    navigation: Navigation,
  },
};
</script>

<style lang="scss" scoped>

</style>
