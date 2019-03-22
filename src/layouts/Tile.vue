<template>
    <a-layout-sider :width="width" class="tile-layout">
        <a-row type="flex" align="top" :gutter="20">
            <a-col
                v-for="(item, idx) in getGrid"
                :key="idx"
                :span="24 / horizontal"
                :class="['grid', getLast(idx) ? 'last' : '' ]"
                :style="getGridStyle"
            >
                <slot name="tile" v-bind:index="idx"></slot>
            </a-col>
        </a-row>
    </a-layout-sider>
</template>

<script>
export default {
    props: {
        vertical: {
            type: [String, Number],
            default: 2
        },
        horizontal: {
            type: [String, Number],
            default: 1
        },
        width: {
            type: [String, Number],
            default: '25%'
        }
    },
    computed: {
        getGrid () {
            return this.vertical * this.horizontal
        },
        getGridStyle () {
            return {
                maxHeight: `calc(100vh / ${this.vertical})`,
            }
        }
    },
    methods: {
        getLast (idx) {
            if(idx === this.getGrid - this.horizontal || idx === this.getGrid - 1){
                return true;
            }
            return false;
        }
    }
}
</script>

<style lang="scss" scope>
$card: ant-card;

.ant-layout-sider{
    &.tile-layout{
        background:transparent;

        .grid{
            margin-bottom:20px;
            overflow:hidden;

            &.last{
                margin-bottom:0;
            }
        }
    }
}
</style>
