<template>
  <a-layout class="container">
    <sider-layout width="50%">
      <template v-slot:title>
        <div>Use AdivolloQuery component</div>
      </template>
      <template v-slot:sider>
        <ApolloQuery
          :query="gql => documents"
        >
          <template v-slot="{ result: { error, data }, isLoading }">
            <!-- Loading -->
            <div v-if="isLoading">Loading...</div>

            <!-- Error -->
            <div v-else-if="error">An error occurred</div>

            <!-- Result -->
            <a-row v-else-if="data">
              <a-col
                v-for="(site, idx) in data.trade.viewer.role.sites || []"
                :key="idx"
                :style="{ margin: '20px'}"
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

            <!-- No result -->
            <div v-else class="no-result apollo">No result :(</div>
          </template>
        </ApolloQuery>
      </template>
    </sider-layout>

    <content-layout>
      <template v-slot:title>
        <div>Smart Query</div>
      </template>
      <template v-slot:content>
        <a-row>
          <a-col
            v-for="site in getSites"
            :key="site.id"
            :style="{ margin: '20px'}"
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
    </content-layout>
  </a-layout>
</template>

<script>
import { Content, Sider } from '@/layouts';
import { service } from '@/configs';

import Sites from '@/graphql/queries/Sites.gql';

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
    'sider-layout': Sider,
  },
  data() {
    return {
      documents: Sites,
      sites: null,
    };
  },
  computed: {
    getSites() {
      return service.getValue(this, 'sites', []);
    },
  },
  // Smart Query
  apollo: {
    sites: {
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
