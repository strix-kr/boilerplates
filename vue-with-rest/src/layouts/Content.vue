<template>
    <a-layout-content>
        <a-row type="flex" justify="start" class="layout content-layout">
        <!--
            slot example
            title : header의 title
            extra : header의 우측으로 정렬
            content : 레이아웃 콘텐트영역을 추가할수 있다
            actions : 레이아웃 최하단 user actions event를 추가할수 있다

            <template v-slot:title>
                title
            </template>
            <template v-slot:extra>
                extra
            </template>
            <template v-slot:content>
                content
            </template>
            <template v-slot:actions>
                actions
            </template>
        -->
            <a-col span="24">
                <a-card
                    :title="title"
                >
                    <slot name="title" slot="title"></slot>
                    <slot name="extra" slot="extra"></slot>
                    <slot name="content"></slot>

                    <slot name="actions" slot="actions"></slot>
                </a-card>
            </a-col>
        </a-row>
    </a-layout-content>
</template>

<script>
export default {
  props: ['title', 'extra'],
};
</script>

<style lang="scss">

</style>
