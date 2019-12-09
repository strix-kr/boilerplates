<template>
  <a-layout class="container">
    <content-layout>
      <template v-slot:title>
        <div>Handle Local State</div>
      </template>

      <template v-slot:content>
        <div class="local-state-area">
          <div class="Loading" v-if="isActive">Loading</div>
          <div class="Loaded" v-else>Loaded</div>
          <div class="view-state">{{ localState }}</div>
          <a-button @click="changeState" :class="{ 'active-button': isActive }">click here!</a-button>
        </div>
      </template>
    </content-layout>
  </a-layout>
</template>

<script>
import { Content } from '@/layouts';
import { store, type } from '@/store';

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
  },
  data() {
    return {
      localState: this.getCurrentState(),
      isActive: false,
    };
  },
  watch: {
    isActive() {
      this.localState = this.getCurrentState();
    },
  },
  methods: {
    getCurrentState() {
      return store.getters.currentState;
    },
    changeState() {
      store.commit(type.TOGGLE_LOADING);
      this.isActive = true;

      setTimeout(() => {
        store.commit(type.TOGGLE_LOADING);
        this.isActive = false;
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
.local-state-area{
  text-align: center;
  font-size: 50px;
}

.Loading{
  color: rgb(46, 156, 156);
  transition-duration: 0.3s;
}

.Loaded{
  color:rgb(0, 0, 0);
  transition-duration: 0.3s;
}

.view-state{
  margin: 30px;
  font-size: 20px;
}

.active-button{
  background-color: rgb(112, 109, 109);
  color: #fff;
  transition-duration: 0.3s;
}
</style>
