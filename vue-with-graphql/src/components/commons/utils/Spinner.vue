<template>
  <transition name="fade">
    <div
      class="spinner-container"
      v-if="loading"
    >
      <a-spin
        :spinning="loading"
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
export default {
  props: ['loading', 'tip'],
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
