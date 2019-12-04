<template>
    <a-layout class="container">
        <tile-layout v-slot:tile :vertical="1" :horizontal="1" width="20%">
            <menus />
        </tile-layout>
                
        <content-layout>
            <template v-slot:title>
                <content-header :type="type" />
            </template>
            <template v-slot:content>
                <content-body :type="type" />
            </template>
        </content-layout>
    </a-layout>
</template>

<script>
import { Tile as TileLayout, Content as ContentLayout } from '@/layouts'
import Menus from './Menus'
import Header from './Header'
import Content from './Content'

export default {
    name: 'Container',
    components: {
        'tile-layout': TileLayout,
        'content-layout': ContentLayout,
        'menus': Menus,
        'content-header': Header,
        'content-body': Content,
    },
    created () {
        this.type = this.$route.params.type || 'posts'
    },
    data () {
        return {
            type: null
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
