<template>
    <a-layout class="container">
        <tile-layout v-slot:tile :vertical="1" :horizontal="1" width="20%">
            <menus />
        </tile-layout>

        <content-layout>
            <template v-slot:title>
                <content-header />
            </template>
            <template v-slot:content>
                <content-body />
            </template>
        </content-layout>
    </a-layout>
</template>

<script>
import { Tile as TileLayout, Content as ContentLayout } from '@/layouts';
import { api, Fetcher } from '@/configs';
import { store, type } from '@/store';
import Menus from './Menus.vue';
import Header from './Header.vue';
import Content from './Content.vue';

export default {
  name: 'Container',
  components: {
    'tile-layout': TileLayout,
    'content-layout': ContentLayout,
    menus: Menus,
    'content-header': Header,
    'content-body': Content,
  },
  async created() {
    if (Object.keys(store.state.fetchData).length === 0) {
      await this.setDataToState();
    }

    this.$router.push({
      ...this.$route,
      params: {
        category: 'posts',
      },
    }).catch(() => {});
  },
  methods: {
    async setDataToState() {
      let list = [];
      const { url } = api.posts();

      store.commit(type.TOGGLE_LOADING);

      await Fetcher.get(url).then((res) => {
        store.commit(type.UPDATE_POST_ITEMS, res.data);
        list = res.data.map((obj) => {
          const commentApi = api.comments(obj.id);
          return Fetcher.get(commentApi.url);
        });
      });

      await Fetcher.all(list).then((data) => {
        const comments = {};
        data.forEach((obj) => {
          if (obj.data.length > 0) {
            const key = obj.data[0].postId;
            comments[key] = obj.data;
          }
        });
        store.commit(type.UPDATE_COMMENT_ITEMS, comments);
      });

      store.commit(type.TOGGLE_LOADING);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
