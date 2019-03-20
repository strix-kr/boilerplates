<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <h3>Maintain</h3>
        <ul class="steps">
            <li><a href="https://cli.vuejs.org/guide/" target="_blank" rel="noopener">based boilerplate : vue/cli-service</a></li>
            <li><a href="https://vue.ant.design/docs/vue/introduce/" target="_blank" rel="noopener">component framework : ant-design-vue</a></li>
            <li><a href="https://firebase.google.com/docs/web/setup?hl=ko" target="_blank" rel="noopener">authorization : firebase SDK</a></li>
            <li><a href="https://vue-cli-plugin-apollo.netlify.com/" target="_blank" rel="noopener">graphql : base on vue-cli-plugin-apollo</a></li>
            <li>etc :
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint, </a>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest, </a>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress" target="_blank" rel="noopener">e2e-cypress</a>
            </li>
        </ul>
        <h3>Steps</h3>
        <ul class="steps" :style="{textAlign:'left'}">
            <li>step1. git clone https://github.com/strix-kr/front-boilerplate.git</li>
            <li>step2. change foldername : $ mv front-boilerplate {projectName}</li>
            <li>step3. change names : ./package.json, manifast.json</li>
            <li>step4. set application configs ./src/configs/setting.js</li>
            <li>step5. set ant-style-variables ./src/styles/ant-variable.js</li>
            <li>step6. to setting git remote : $ git remote set-url origin {projectRepo}</li>
            <li>step7. $ cd {projectName} && yarn install</li>
            <li>step8. graphql example <router-link to="/about">Here</router-link></li>
            <li>step9. you have to write k8s.yaml, Jenkinsfile</li>
            <li>step10. you have to remove unused components ./src/registerAntFramework after complete project </li>
        </ul>

        <h3>ant-design-vue && firebase login Example</h3>
        <div class="login-wrapper">
            <a-form
                :form="form"
            >
                <a-form-item
                    label="email"
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 19 }"
                >
                    <a-input
                        v-decorator="[
                            'email',
                            {rules: [{ required: true, message: 'Please input your note!', type: 'email' }]}
                        ]"
                        placeholder="email"
                    >
                    <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
                </a-form-item>
                <a-form-item
                    label="password"
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 19 }"
                >
                    <a-input
                        v-decorator="[
                            'password',
                            {rules: [{ required: true, message: 'Please input password!' }]}
                        ]"
                        type="password"
                        placeholder="Password"
                    >
                        <a-icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0,0,0,.25)"
                        />
                    </a-input>
                </a-form-item>
                <a-form-item
                    :wrapper-col="{ span: 19, offset: 5 }"
                >
                    <a-button
                        type="primary"
                        @click.prevent="onLogin"
                    >
                        로그인
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

import { Modal } from 'ant-design-vue'

export default {
    data () {
        return {
            form: this.$form.createForm(this)
        }
    },
    props: {
        msg: String
    },
    methods: {
        onLogin () {
            this.form.validateFields((err, values) => {
                if (!err) {
                    const { email, password } = values
                    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(() => {
                        return firebase.auth().signInWithEmailAndPassword(email, password)
                            .then((data) => {
                                if (data.user) {
                                    return Modal.success({
                                        title: '로그인되었습니다',
                                        content: `${data.user.email}님 환영합니다`,
                                        onOk: this.onOk
                                    })
                                }
                            })
                            .catch((error) => {
                                return Modal.error({
                                    title: error.code,
                                    content: error.message
                                })
                            })
                    })
                    .catch((error) => {
                        // Handle Errors here.
                        console.log('error', error)
                    })
                }
            })
        },
        onOk () {
            this.$router.replace('/about')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.login-wrapper{
    max-width:400px;
    margin:50px auto;
}

.steps{
    max-width:550px;
    margin:0 auto;
    li{
        font-size:1.2em;
        display:block;
        margin: 10px;
    }
}
</style>
