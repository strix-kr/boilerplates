<template>
  <div class="example">
    <div class="inner-menu">
      <router-link
        :to="{ name : 'query' }"
      >
        <a-button >Query</a-button>
      </router-link>
      <router-link
        :to="{ name : 'mutation' }"
      >
        <a-button >Mutation</a-button>
      </router-link>
      <router-link
        :to="{ name : 'upload' }"
      >
        <a-button >File Upload</a-button>
      </router-link>
      <router-link
        :to="{ name : 'local' }"
      >
        <a-button >Local State</a-button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Example',
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
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

</style>
