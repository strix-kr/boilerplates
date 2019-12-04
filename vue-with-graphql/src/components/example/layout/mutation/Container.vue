<template>
  <a-layout class="container">
    <sider-layout width="20%" title="Site List">
      <template v-slot:sider>
        <a-row>
          <a-col
            v-for="site in getSites"
            :key="site.id"
            :style="{ margin: '20px', cursor: 'pointer' }"
            @click="() => onClick(site)"
          >
            <span
              v-for="key in Object.keys(site).filter(key => key !== '__typename')"
              :key="key"
              :style="{ marginBottom: '0'}"
            >
              {{ `${key} : ${site[key]}`}}
            </span>
          </a-col>
        </a-row>
      </template>
    </sider-layout>

    <content-layout>
      <template v-slot:title>
        <div>{{ getName }}</div>
      </template>
      <template v-slot:content>
        <content-wrap />
      </template>
    </content-layout>
  </a-layout>
</template>

<script>
import { Content, Sider } from '@/layouts';
import { service } from '@/configs';
import Sites from '@/graphql/queries/Sites.gql';

import ContentWrap from './ContentWrap.vue';

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
    'sider-layout': Sider,
    'content-wrap': ContentWrap,
  },
  data() {
    return {
      fetch: null,
      selected: null,
    };
  },
  computed: {
    getSites() {
      return service.getValue(this, 'fetch', []);
    },
    getName() {
      return this.selected ? service.getValue(this.selected, 'name', '') : 'Select Site';
    },
  },
  methods: {
    onClick(site) {
      this.selected = site;
      if (this.$route.params.id !== site.id) {
        return this.$router.push({
          ...this.$route,
          params: {
            id: site.id,
            mode: 'read',
          },
        });
      } else {
        return true
      }
    },
  },

  apollo: {
    fetch: {
      query: Sites,
      update(data) {
        return service.getValue(data, 'trade.viewer.role.sites', null);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
