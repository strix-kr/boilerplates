<template>
    <a-layout-header class="header">
        <a-row type="flex" justify="space-around" align="middle">
            <a-col span="4">
                <router-link to="/" class="logo"><img src="@/assets/logo.png" alt="logo"></router-link>
            </a-col>
            <a-col span="4" class="header-widget">
                <timer />
            </a-col>
            <a-col span="10" class="header-widget">
                <capacity-widget :dataObj="capacityObj" />
            </a-col>
            <a-col span="5" class="header-widget">
                <user-info />
            </a-col>
            <a-col span="1" class="header-widget">
                <navigation />
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script>
import timer from '@/components/commons/Timer'
import { Capacity, UserInfo, Navigation } from '@/components/header'

export default {
    name: 'Header',
    components: {
        'capacity-widget': Capacity,
        'user-info': UserInfo,
        'navigation': Navigation
    },
    data () {
        return {
            capacityObj : [
                { id : 'PV', value : 100, steps : 'kWh' },
                { id : 'WT', value : 0, steps : 'kWh' },
                { id : 'ESS', value : 10000, steps : 'kW' }
            ]
        }
    },
}
</script>

<style lang="scss">
.header{
    .logo{
        display:block;

        img{
            width:200px;
        }
    }

    &-widget{
        padding: 0 20px;
        align-items:center;
        line-height:1.3em;

        p{
            margin:0;

            &.title{
                font-size:0.8em;
                margin-bottom:8px;

            }
        }
    }
}
</style>
