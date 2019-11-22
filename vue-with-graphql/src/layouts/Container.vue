<template>
    <a-layout-content style="padding: 0 50px">
        <breadcrumb />
        <!-- switch router -->
        <router-view></router-view>
    </a-layout-content>
</template>

<script>
import BreadCrumb from './BreadCrumb'

export default {
    name: 'Container',
    components : {
        'breadcrumb': BreadCrumb
    }
}
</script>

<style lang="scss">
</style>
