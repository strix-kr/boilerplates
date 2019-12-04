<template>
  <div class="example">
    <div class="inner-menu">
      <router-link
        :to="{ name : 'full' }"
      >
        <a-button >FullLayout(Sider and Content)</a-button>
      </router-link>
      <router-link
        :to="{ name : 'content' }"
      >
        <a-button >Content Layout(Only Content)</a-button>
      </router-link>
      <router-link
        :to="{ name : 'tile' }"
      >
        <a-button >Tile(Tile and Content)</a-button>
      </router-link>
      <router-link
        :to="{ name : 'mix' }"
      >
        <a-button >Mix(Sider and Tile and Content)</a-button>
      </router-link>

      <router-link
        :to="{ name : 'list' }"
      >
        <a-button>List(Tile and List)</a-button>
      </router-link>

      <router-link
        :to="{ name : 'form' }"
      >
        <a-button>Form(Only Form)</a-button>
      </router-link>
    </div>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import { Content, Sider } from '@/layouts'

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
    'sider-layout': Sider
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.inner-menu{
  text-align: center;
  margin: 10px 0 20px;
  .ant-btn{
    font-size: 0.9em;
    margin: 0 5px;
  }
  .router-link-active{
    .ant-btn{
      color: $primary-color;
    }
  }
}

</style>
