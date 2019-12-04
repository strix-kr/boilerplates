<template>
  <a-layout class="container">
    <sider-layout width="20%" title="Sider">
      <template v-slot:sider>
        <div>Sider</div>
      </template>
    </sider-layout>

    <content-layout>
      <template v-slot:title>
        <div>Content Title</div>
      </template>
      <template v-slot:content>
        <div>Content Wrapper</div>
      </template>
    </content-layout>
  </a-layout>
</template>

<script>
import { Content, Sider } from '@/layouts';

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
    'sider-layout': Sider,
  },
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

</style>
