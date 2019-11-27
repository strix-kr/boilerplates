<template>
    <a-layout-sider :width="siderWidth" theme="light">
        <a-row type="flex" justify="start" class="layout sider-layout" >
            <a-col span="24">
                <!--
                    slot example
                    title : header의 title
                    extra : header의 우측으로 정렬
                    sider : 레이아웃 콘텐트영역을 추가할수 있다
                    actions : 레이아웃 최하단 user actions event를 추가할수 있다

                    <template v-slot:title>
                        title
                    </template>
                    <template v-slot:extra>
                        extra
                    </template>
                    <template v-slot:sider>
                        sider
                    </template>
                    <template v-slot:actions>
                        actions
                    </template>
                -->
                <a-card
                    :title="title"
                >
                    <slot name="title" slot="title"></slot>
                    <slot name="extra" slot="extra"></slot>
                    <slot name="sider"></slot>

                    <slot name="actions" slot="actions"></slot>
                </a-card>
            </a-col>
        </a-row>
    </a-layout-sider>
</template>

<script>
export default {
  props: ['title', 'extra', 'width'],
  data() {
    return {
      siderWidth: this.width || '280',
    };
  },
};
</script>

<style lang="scss">
.sider-layout{
  & > .ant-col-24{
    height: 100%;
    overflow: hidden;
  }
}
</style>
