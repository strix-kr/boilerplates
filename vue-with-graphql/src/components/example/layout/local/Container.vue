<template>
  <a-layout class="container">
    <content-layout>
      <template v-slot:title>
        <div>Handle Local State</div>
      </template>
      <template v-slot:content>
        <div class="loading-status">
          <transition name="fade">
            <div v-if="loading" class="loading">Loading...</div>

            <!-- loaded -->
            <div v-else class="loaded">Loaded</div>
          </transition>
          <div>
            {{ cache }}
          </div>
          <a-button type="primary" @click="onClick" >Test</a-button>
        </div>
      </template>
    </content-layout>
  </a-layout>
</template>

<script>
import { Content } from '@/layouts';
import Loading from '@/graphql/queries/Loading.gql';
import ChangeLoading from '@/graphql/mutations/ChangeLoading.gql';

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
  },
  data() {
    return {
      loading: false,
      cache: null,
    };
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        const apolloClient = this.$apollo.getClient();
        this.cache = apolloClient.readQuery({ query: Loading });
      }
    },
  },
  apollo: {
    loading: {
      query: Loading,
      result({ data }) {
        this.loading = data.loading;
      },
    },
  },
  methods: {
    onClick() {
      this.$apollo.mutate({
        mutation: ChangeLoading,
        variables: {
          loading: !this.loading,
        },
      }).then(() => {
        setTimeout(() => {
          this.$apollo.mutate({
            mutation: ChangeLoading,
            variables: {
              loading: !this.loading,
            },
          });
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-status{
  text-align: center;

  & > div{
    font-size: 3em;
    margin-bottom: 30px;

    &.loading {
      color: green;
    }
    &.loaded {
      color: magenta;
    }
  }
}
</style>
