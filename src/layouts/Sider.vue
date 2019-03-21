<template>
    <a-layout-sider :width="siderWidth">
        <a-card
            :title="title"
            :bordered="false"
            class="sider-card-layout"
        >
            <slot name="title" slot="title"></slot>
            <slot name="extra" slot="extra"></slot>
            <slot name="sider"></slot>

            <slot name="actions" slot="actions"></slot>
        </a-card>
    </a-layout-sider>
</template>

<script>
export default {
    props: ['title', 'extra', 'width'],
    data () {
        return {
            siderWidth: this.width || '280'
        }
    }
}
</script>

<style lang="scss" scope>
$card: ant-card;

.sider-card-layout{
    &.#{$card}{
        display:flex;
        height: calc(100vh - 200px);
        flex-flow: column nowrap;

        & > .#{$card}-head{
            flex: 0 0 57px;
            margin-bottom:0;
            padding:0 18px 0 24px;
        }
        & > .#{$card}-actions{
            flex: 0 0 47px;
            background:transparent;
        }
        & > .#{$card}-body{
            flex: 1 1 auto;
            margin:10px 0;
            padding:0;
            overflow-x:hidden;
            overflow-y:auto;
        }
        & > .#{$card}-extra{
            padding:0;
        }
    }
}
</style>
