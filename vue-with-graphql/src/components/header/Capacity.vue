<template>
    <div class="capacity">
        <p class="title">설비용량</p>
        <span
            v-for="(item, idx) in dataObj"
            :key="idx"
            class="item"
        >
            <span>{{item.id}}</span>
            <span>{{amount(item.value)}}</span>
            <span>{{item.steps}}</span>
        </span>
    </div>
</template>

<script>
import { service } from '@/configs'

export default {
    props: {
        dataObj: {
            type: Array,
            required : true,
            default: []
        }
    },
    methods: {
        amount (value) {
            return service.amount(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.capacity{

    .item{
        display:inline-block;
        margin-right:30px;
        span{
            display:inline-block;
            margin-right:5px;
        }
    }
}
</style>
