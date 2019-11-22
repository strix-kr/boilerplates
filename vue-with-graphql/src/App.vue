<template>
    <a-locale-provider :locale="locale">
        <a-layout id="WebApp">
            <header-view />
            <container />
            <footer-view />
        </a-layout>
    </a-locale-provider>
</template>

<script>
import koKR from 'ant-design-vue/lib/locale-provider/ko_KR'
import { Header, Footer, Container } from '@/layouts'

export default {
    name: 'App',
    data () {
        return {
            locale: koKR
        }
    },
    components: {
        'header-view': Header,
        'footer-view': Footer,
        'container': Container
    }
}
</script>

<style lang="scss">

</style>
