<template>
  <div class="hello">
    <h2>email: {{ email }}</h2>
    <h2>password: {{ password }}</h2>
    <h2>name: {{ name }}</h2>
    <h2>gender: {{ gender }}</h2>
    <h2>country: {{ country }}</h2>
    <h2>birth: {{ birth }}</h2>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'HelloWorld',
  data() {
    return store.getters.currentUser;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  margin: 40px 0 30px;

}
</style>
