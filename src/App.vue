<template>
    <!-- ant-design provider set framework locale -->
    <a-locale-provider :locale="locale">
        <div id="app">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
            <router-view />
        </div>
    </a-locale-provider>
</template>

<script>
import koKR from 'ant-design-vue/lib/locale-provider/ko_KR'

export default {
    data () {
        return {
            locale: koKR
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
