<template>
    <a-layout class="container dashborad-container">
        <tile-layout :vertical="vertical" :horizontal="horizontal" width="50%">
            <template
                v-for="item in list"
                v-slot:tile="{ index }"
            >
                <a-card
                    :bordered="false"
                    :title="`${list[index].name}tile`"
                    :bodyStyle="bodyStyle"
                >
                    <a-button type="primary" slot="extra">click</a-button>
                    {{ list[index].value }}
                    {{ list[index] }}
                    <template slot="actions">
                        <a-icon type="setting" />
                        <a-icon type="setting" />
                        <a-icon type="setting" />
                    </template>
                </a-card>
            </template>
        </tile-layout>
        <content-layout>
            dashborad
        </content-layout>
    </a-layout>
</template>

<script>
import { Content, Tile } from '@/layouts'

// setting
const vertical = 4
const horizontal = 2

export default {
    name: 'DashBoard',
    components: {
        'tile-layout': Tile,
        'content-layout': Content
    },
    data () {
        return {
            vertical : vertical,
            horizontal : horizontal,
            bodyStyle: {
                minHeight: `calc(100vh / ${vertical * 2})`
            },
            list: [
                {id : 1, value: '11', name: '1qjs'},
                {id : 2, value: '22', name: '2qjs'},
                {id : 3, value: '33', name: '3qjs'},
                {id : 4, value: '44', name: '4qjs'},
                {id : 5, value: '55', name: '5qjs'},
                {id : 6, value: '66', name: '6qjs'},
                {id : 7, value: '77', name: '7qjs'},
                {id : 8, value: '88', name: '8qjs'}
            ]
        }
    }
}
</script>

<style lang="scss">
</style>
