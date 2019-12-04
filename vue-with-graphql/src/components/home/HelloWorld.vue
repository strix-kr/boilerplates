<template>
  <a-row class="hello" type="flex" justify="center" align="top">
    <a-col span="24">
      <h2>로그인 되었습니다.</h2>
    </a-col>
    <a-col span="6">
      <h3>로그인 정보</h3>
      <ul>
        <li
          v-for="key in Object.keys(getViewer)"
          :key="key"
        >
          {{ `${key} : ${getViewer[key]}` }}
        </li>
      </ul>
    </a-col>
  </a-row>
</template>

<script>
import { service } from '@/configs';
import Viewer from '@/graphql/queries/Viewer.gql';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      fetch: null,
    };
  },
  computed: {
    getViewer() {
      const obj = service.getValue(this.fetch, 'trade.viewer', {});
      return this.fetch ? Object.keys(obj).filter(key => key !== '__typename').reduce((result, key) => {
        result[key] = obj[key];
        return result;
      }, {
        'isLoggedIn (localState)': this.fetch.isLoggedIn,
      }) : {};
    },
  },
  apollo: {
    fetch: {
      query: Viewer,
      update(data) {
        return data;
      },
    },
  },
};
</script>


<style lang="scss" scoped>
.hello{
  ul{
    li{
      list-style: none;
      text-align: left;
      font-size: 1.2em;
      padding: 10px;
    }
  }
}

</style>
