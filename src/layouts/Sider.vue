<template>
    <a-layout-sider :width="siderWidth" class="sider-layout">
        <a-card
            :title="title"
            :bordered="false"
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

.sider-layout{
    padding-left:2px;

    .#{$card}{
        border-radius:10px;
        display:flex;
        height: calc(100vh - 200px);
        flex-flow: column nowrap;

        .#{$card}-head{
            flex: 0 0 57px;
            margin-bottom:0;
            padding:0 18px 0 24px;
        }

        .#{$card}-actions{
            flex: 0 0 47px;
            background:transparent;
        }

        .#{$card}-body{
            flex: 1 1 auto;
            overflow-x:hidden;
            overflow-y:auto;
            margin:10px 0;
            padding:0;
        }

        .#{$card}-extra{
            padding:0;
        }
    }
}
</style>
