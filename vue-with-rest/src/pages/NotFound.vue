<template>
  <a-layout>
    <a-layout-content>
      <a-row type="flex" align="middle"  class="not-found" justify="center">
        <a-col>
          <a-row class="not-found-inner">
            <a-col :style="{marginBottom: '80px'}">
              <p class="title">404 Error</p>
              <p class="sub-title">페이지를 찾을 수 없습니다.</p>
            </a-col>

            <a-col class="btn-wrap">
              <a-button type="primary" class="btn-grey" icon="undo" @click="goBack">이전페이지로</a-button>
              <a-button type="primary" icon="home" @click="goHome">메인화면으로</a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome() {
      return this.$router.push(process.env.BASE_URL);
    },
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.not-found{
    height:100vh;
    background-color:$white-color;

    &-inner{
        text-align: center;

        .title{
            font-size:7em;
            font-weight:bold;
            color:$black-color;
            font-style: italic;
            margin-bottom: 10px;
        }
        .sub-title{
            font-size: 2em;
            color: rgba($grey-color, 0.7);
        }
        .btn-wrap{
            .ant-btn{
                margin: 0 16px;
            }
        }
    }
}
</style>
