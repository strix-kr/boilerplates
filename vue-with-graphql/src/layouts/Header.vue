<template>
  <a-layout-header>
    <a-row type="flex" justify="space-between" align="middle" class="header">
      <a-col span="20" push="2">
        <h3 :style="{ color: '#fff'}">Header</h3>
      </a-col>
      <a-col span="2">
         <a-button @click="onLogout">logout</a-button>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import { logout } from '@/graphql/apollo';

export default {
  name: 'Header',
  methods: {
    onLogout() {
      const client = this.$apollo.getClient();
      logout(client);
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  text-align: center;
}
</style>
