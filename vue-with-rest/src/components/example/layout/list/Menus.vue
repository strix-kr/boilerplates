<template>
    <a-layout>
        <template
            v-for="(menu, idx) in menus"
        >
            <a-card
                :key="idx"
                :headStyle="headStyle"
                :bodyStyle="bodyStyle"
                :hoverable="true"
                @click="onSelectMenu(`${menu.category}`)"
            >
            <template v-slot:title>
                {{menu.title}}
            </template>

            <template v-slot:extra>
                <a-icon type="right" />
            </template>

            {{menu.desc}}
            </a-card>

        </template>
    </a-layout>
</template>

<script>
const menus = [
  {
    category: 'posts',
    title: 'Post',
    desc: 'get Post Data by REST',
  },
];

const menuCount = menus.length;

export default {
  name: 'Sider',
  data() {
    return {
      menus,
      headStyle: {
        backgroundColor: '#fafafa',
        borderBottom: '1.5px solid #dadada',
      },
      bodyStyle: {
        minHeight: `100vh / ${menuCount}`,
      },
    };
  },
  methods: {
    onSelectMenu(category) {
      this.$router.push({
        ...this.$route,
        params: {
          category,
        },
      }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
