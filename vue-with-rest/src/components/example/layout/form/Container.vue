<template>
    <a-layout class="container">
        <content-layout>
            <template v-slot:content>
                <router-view />
            </template>
        </content-layout>
    </a-layout>   
</template>

<script>
import { Content } from '@/layouts'

export default {
    name: 'Container',
    components: {
        'content-layout': Content,
    },
}
</script>

<style lang="scss" scope>
</style>