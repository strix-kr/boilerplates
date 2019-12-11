<template>
  <div class="home">
    <img alt="Vue logo" :src="logo">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import logo from '@/assets/logo.png';

export default {
  name: 'Container',
  data() {
    return {
      logo,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.home{
  text-align: center;
}
</style>
