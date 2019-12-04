<template>
    <a-row 
        type="flex" 
        justify="center"
        align="middle"
    >
        <a-col :span="3" class="menu-col">
            <a-card :bodyStyle="cardBodyStyle" @click="goToUserForm">
                <a-icon type="user-add" v-slot:title/>
                Create User
            </a-card>
        </a-col>
        <a-col :span="3" class="menu-col">
            <a-card :bodyStyle="cardBodyStyle" @click="goToUserForm(1)">
                <a-icon type="idcard" />
                Update User
            </a-card>
        </a-col>
    </a-row>    
</template>

<script>
export default {
    name: 'Container',
    data () {
        return {
            cardBodyStyle: {
                'text-align': 'center',
                'font-size': '18px',
                'cursor': 'pointer',
            }
        }
    },
    methods: {
        goToUserForm (id, e) {
            id = ( id instanceof Event ) ? null : id
            this.$router.push({ name: 'user', params: { id } }).catch(() => {})
        },
    } 
}
</script>

<style lang="scss" scoped>
.menu-col{
    margin: 0px 3vw;
}

.ant-row-flex.ant-row-flex-center.ant-row-flex-middle{
    height: 70vh;
}

.ant-card{
    border: 1px solid #afafaf;

    &:hover{
        background-color: #f7f5f5e7;
    }
}
</style>