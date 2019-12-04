<template>
    <a-row type="flex" justify="center">
        <a-col :span="4">
            <a-card :title="title" :headStyle="headStyle">
                <a-form :form="form" @submit="onSubmit">
                    <a-form-item label="email">
                        <a-input 
                            placeholder="Please input your email"
                            v-decorator="[
                                'useremail',
                                { rules: [{ required: true, message: 'email is required!' }] },
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="password">
                        <a-input
                            placeholder="Please input your password"
                            v-decorator="[
                                'password',
                                { rules: [{ required: true, message: 'password is required!' }] }
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="password confirm">
                        <a-input
                            placeholder="Please input your password confirm"
                            v-decorator="[
                                'passwordconfirm',
                                { rules: [{ required: true, message: 'password confirm is required!' }] }
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="name">
                        <a-input
                            placeholder="Please input your name"
                            v-decorator="[
                                'name',
                                { rules: [{ required: true, message: 'name is required!' }] }
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="gender">
                        <a-radio-group 
                            name="gender" 
                            v-decorator="[ 
                                'gender', 
                                { rules: [{  required: true, message: 'gender is required!' }] } 
                            ]" 
                        >
                            <a-radio value="M">Male</a-radio>
                            <a-radio value="F">Female</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="country">
                        <a-select defaultValue="KR">
                            <a-select-option value="KR">South Korea</a-select-option>
                            <a-select-option value="US">United States</a-select-option>
                            <a-select-option value="JA">Japan</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="birthday">
                        <a-date-picker placeholder="Please Select your birthday" />
                    </a-form-item>

                    <a-form-item>
                        <a-button html-type="submit" @click="goBack">
                            Cancel
                        </a-button>
                        <a-button type="primary" html-type="submit" class="mgL">
                            Ok
                        </a-button>
                    </a-form-item>
                </a-form>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import { api, fetcher } from '@/configs'

export default {
    name: 'UserInfo',
    data () {
        return {
            form: this.$form.createForm(this),
            title: 'Sign Up',
            method: 'post',
            userId: null,
            headStyle: {
                fontSize: '25px',
            }
        }
    },
    mounted () {
        const id = this.$route.params.id
        if( id ){
            this.title = 'Modify'
            this.method = 'put'
            this.userId = id
        }
    },
    methods: {
        onSubmit (e) {
            e.preventDefault()

            this.form.validateFields((err, values) => {
                if(err){
                    return
                }

                const { url, param } = api.users(this.userId, values)

                fetcher[this.method](url, param)
                .then(res => {
                    if(res.status !== 201 && res.status !== 200){
                        console.warn(res)
                        alert('fail!')
                        return
                    }

                    alert(`Success! \n ${JSON.stringify(res.data)}`)
                })
                .catch(error => {
                    console.error(error)
                    alert('error!')
                })
            })
        },
        goBack () {
            this.$router.push({ name: 'form' })
        },
    }
}
</script>

<style lang="scss" scoped>
.ant-card-bordered{
    border: 0px;
}

.mgL{
    margin-left: 10px;
}
</style>