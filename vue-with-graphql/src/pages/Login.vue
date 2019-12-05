<template>
  <a-layout id="login">
    <a-layout-content>
        <a-row type="flex" align="middle" class="login-container" justify="center">
          <a-col>
            <a-row class="login-container-inner">
              <a-col><h3>YOU NEED LOGIN</h3></a-col>
              <a-col>
                <a-form
                  :form="form"
                >
                  <a-form-item
                    :validate-status="emailError() ? 'error' : ''"
                    :help="emailError() || ''
                  ">
                    <a-input
                      v-decorator="['email',
                      {
                        rules: [{ required: true, message: '이메일을 입력하세요' }]
                      }]"
                      :autoFocus="true"
                      autocomplete="off"
                      placeholder="이메일"
                    >
                      <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item
                    :validate-status="passwordError() ? 'error' : ''"
                    :help="passwordError() || ''"
                  >
                    <a-input
                      v-decorator="['password',
                      {
                        rules: [{ required: true, message: '비밀번호를 입력하세요' }]
                      }]"
                      type="password"
                      autocomplete="off"
                      placeholder="비밀번호"
                      @pressEnter="onLogin"
                    >
                      <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item>
                    <a-button
                      type="primary"
                      block
                      class="btn-login"
                      :disabled="hasErrors(form.getFieldsError())"
                      @click="onLogin"
                    >
                      Back to Home
                    </a-button>
                  </a-form-item>
                </a-form>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: 'Login',
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this),
    };
  },
  methods: {
    emailError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('email') && getFieldError('email');
    },
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    onLogin() {
      this.form.validateFields((err, values) => {
        if (!err) {
          const { email, password } = values;
          return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
            .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
            .catch((error) => {
              console.log('error', error);
            });
        }
        return true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.login-container{
  height:100vh;
  background-color:$white-color;

  &-inner{
    text-align:center;

    img{
      width:80%;
    }

    & > div:not(.text-area){
      max-width:300px;
      min-width:300px;
      margin: 0 auto;
    }

    .title{
      margin:0.5em 0;
    }

    .ant-form-item{
      margin-bottom:10px;
    }
  }
}
</style>
