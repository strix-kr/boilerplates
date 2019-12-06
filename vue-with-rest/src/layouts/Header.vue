<template>
  <a-layout-header>
    <a-row type="flex" class="header">
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" />
      <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
        <h3 :style="{ color: '#fff'}">Header</h3>
      </a-col>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
        <h3 class="iconWrap">
          <a-icon class="icon" type="form" @click="onEditUser"/>
          <a-icon class="icon" type="export" @click="onLogout"/>
        </h3>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import { store, type } from '@/store';

export default {
  name: 'Header',
  data() {
    return {

    };
  },
  methods: {
    onLogout() {
      store.commit(type.USER_LOGOUT);
      this.$router.push('/');
    },
    onEditUser() {
      const user = store.getters.currentUser;
      this.$router.push(`/user/${user.email}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  text-align: center;
}

.iconWrap{
  text-align: right;

  & .icon{
    cursor: pointer;
    margin: 20px 0 0 25px;
    font-size: 30px;
    color: #fff;
  }
}
</style>
