<template>
  <a-layout-header>
    <a-row type="flex" justify="space-between" align="middle" class="header">
      <a-col span="24">
        <h3 :style="{ color: '#fff'}">Header</h3>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.header{
  text-align: center;
}
</style>
