<template>
    <div class="navigation">
        <a-button type="ghost" icon="bars" class="bars" @click.prevent="onTrigger"/>

        <a-drawer
            title="Basic Drawer"
            placement="right"
            :width="getWidth"
            :height="getHeight"
            @close="onTrigger"
            :visible="visible"
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-drawer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false
        }
    },
    computed: {
        getWidth () {
            return (window.innerWidth / 4).toFixed(0)
        },
        getHeight () {
            return window.innerHeight
        }
    },
    methods: {
        onTrigger () {
            this.visible = !this.visible
        }
    }
}
</script>

<style lang="scss" scoped>
.navigation{
    .bars{
        border-color:transparent;
        font-size:2.5em;
        line-height:64px;
        height:64px;

        &::after{
            display:none !important;
        }
    }
}
</style>
