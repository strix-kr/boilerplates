<template>
  <a-layout class="container">
    <sider-layout width="20%" title="Sider">
      <template v-slot:sider>
        <div>Sider</div>
      </template>
    </sider-layout>

    <tile-layout :vertical="vertical" :horizontal="horizontal" width="20%">
      <template
        v-for="(item, idx) in list"
        v-slot:tile="{ index }"
      >
        <a-card
          :key="idx"
          :bordered="false"
          :bodyStyle="bodyStyle"
       >
          <template slot="title" >
            {{ list[index].name }}
          </template>
          <a-button type="primary" slot="extra">click</a-button>
          {{ list[index].value }}
          {{ list[index] }}
          <template slot="actions">
            <a-icon type="setting" />
            <a-icon type="setting" />
            <a-icon type="setting" />
          </template>
        </a-card>
      </template>
    </tile-layout>
    <tile-layout :vertical="vertical" :horizontal="horizontal" width="20%">
      <template
        v-for="(item, idx) in list"
        v-slot:tile="{ index }"
      >
        <a-card
          :key="idx"
          :bordered="false"
          :bodyStyle="bodyStyle"
       >
          <template slot="title" >
            {{ list[index].name }}
          </template>
          <a-button type="primary" slot="extra">click</a-button>
          {{ list[index].value }}
          {{ list[index] }}
          <template slot="actions">
            <a-icon type="setting" />
            <a-icon type="setting" />
            <a-icon type="setting" />
          </template>
        </a-card>
      </template>
    </tile-layout>
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
import { Content, Sider, Tile } from '@/layouts';

// setting
const vertical = 4;
const horizontal = 1;

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
    'sider-layout': Sider,
    'tile-layout': Tile,
  },
  data() {
    return {
      vertical,
      horizontal,
      bodyStyle: {
        minHeight: `calc(100vh / ${vertical * 2})`,
      },
      list: [
        { id: 1, value: 'tile1', name: 'tile1' },
        { id: 2, value: 'tile2', name: 'tile2' },
        { id: 3, value: 'tile3', name: 'tile3' },
        { id: 4, value: 'tile4', name: 'tile4' },
      ],
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
