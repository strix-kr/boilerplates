<template>
    <a-row class="user-info" type="flex" justify="end" align="middle">
        <a-col class="name">
            <p>솔라커넥트 마스터관리자 님</p>
        </a-col>
        <a-col span="4">
            <router-link :to="{ name: 'trade', params: {id : 0, mode : 'read'} }"><a-icon type="bell" theme="filled"/></router-link>
        </a-col>
        <a-col span="4">
            <router-link :to="{ name: 'tradeBid' }"><a-icon type="setting" theme="filled"/></router-link>
        </a-col>
    </a-row>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.user-info{
    & > div:not(.name){
        font-size:1.8em;
        text-align:center;
    }

    .name{
        margin-right:20px;
    }

    .anticon{
        color:#fff;
    }
}
</style>
