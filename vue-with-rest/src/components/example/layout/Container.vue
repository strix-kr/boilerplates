<template>
  <div class="example">
    <div class="inner-menu">
      <router-link
        :to="{ name : 'list' }"
      >
        <a-button>List(Tile and List)</a-button>
      </router-link>

      <router-link
        :to="{ name : 'local' }"
      >
        <a-button>Local State</a-button>
      </router-link>
    </div>
    <router-view :key="$route.path"/>
    <div class="icon-loading" v-show="status.isLoading"><a-icon type="loading"/></div>
  </div>
</template>

<script>
import { store, type } from '@/store';

export default {
  name: 'Container',
  data() {
    return {
      status: store.state.status,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.inner-menu{
  text-align: center;
  margin: 10px 0 20px;
  .ant-btn{
    font-size: 0.9em;
    margin: 0 5px;
  }
  .router-link-active{
    .ant-btn{
      color: $primary-color;
    }
  }
}

.icon-loading{
  font-size: 50px;
  position: absolute;
  top: 50vh;
  left: 50vw;
}
</style>
