<template>
  <div class="navigation">
    <router-link
      v-for="route in getRoutes"
      :key="route.name"
      :to="{ path : route.path }"
    >
      {{(route.name).toUpperCase()}}
    </router-link>
  </div>
</template>

<script>
import { routes } from '@/router';

export default {
  name: 'Navigation',
  data() {
    return {
      routes,
    };
  },
  computed: {
    getRoutes() {
      return this.routes.filter(route => route.meta.navigation.show);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.navigation{
  padding: 10px 0;
  text-align: center;

  a{
    text-decoration: none;
    color: $black-color;
    font-size: 1em;
    padding: 0 10px;

    &.router-link-active{
      color: $primary-color;
    }
  }
}

</style>
