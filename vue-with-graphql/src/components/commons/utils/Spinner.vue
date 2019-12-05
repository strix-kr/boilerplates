<template>
  <transition name="fade">
    <div
      class="spinner-container"
      v-if="getLoading"
    >
      <a-spin
        :spinning="getLoading"
        :tip="tip || null"
      >
        <a-icon
          slot="indicator"
          type="loading"
          class="spinner"
          size="large"
        />
      </a-spin>
    </div>
  </transition>
</template>

<script>
import Loading from '@/graphql/queries/Loading.gql';
import ChangeLoading from '@/graphql/mutations/ChangeLoading.gql';

export default {
  name: 'Spinner',
  props: ['loading', 'tip'],
  data() {
    return {
      localLoding: false,
    };
  },
  computed: {
    getLoading() {
      return this.loading || this.localLoding;
    },
  },
  apollo: {
    localLoding: {
      query: Loading,
      update({ loading }) {
        return loading;
      },
    },
  },
  watch: {
    $route(value, oldValue) {
      if (value !== oldValue) {
        if (!this.loading) {
          this.$apollo.mutate({ mutation: ChangeLoading, variables: { loading: true } });
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.$apollo.mutate({ mutation: ChangeLoading, variables: { loading: false } });
          }, 300);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter{
  opacity:0;
  transition: opacity .3s ease;
}

.fade-leave-to{
  opacity:0;
  transition: opacity .3s ease-out;
}

.fade-enter-active,
.fade-leave-active{
  opacity:1;
  transition: opacity .3s ease;
}

.spinner-container{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  z-index:1000;

  .spinner{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index:1001;
    font-size:50px;
  }
}
</style>
