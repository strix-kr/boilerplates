<template>
    <a-breadcrumb :routes="breadcrumbs" class="breadcrumb">
        <template slot="itemRender" slot-scope="{route, params, routes, paths}">
            <router-link v-if="route.name === 'home'" :to="route.path">
                <a-icon type="home" /> {{route.breadcrumbName}}
            </router-link>
            <router-link v-else :to="{name : route.name, params : {id : 0, mode : 'read'}}">{{route.breadcrumbName}}</router-link>
        </template>
    </a-breadcrumb>
</template>

<script>
export default {
    computed: {
        breadcrumbs() {
            const routes = this.$route.matched.map(route => {
                return {
                    name: route?.name || 'home',
                    path: route?.name || '/',
                    breadcrumbName: route?.meta.breadTitle || ''
                }
            })
            return [{
                breadcrumbName: 'home',
                name: 'home',
                path: '/'
            }].concat(routes)
        }
    }
}
</script>

<style lang="scss" scoped>
.breadcrumb{
    margin: 16px 0;
}
</style>
