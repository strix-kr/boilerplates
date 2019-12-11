<template>
  <a-layout class="container">
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
import { Content } from '@/layouts';

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
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
