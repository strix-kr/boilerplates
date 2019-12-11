<template>
    <a-row type="flex" justify="center" align="middle" class="userLayout">
        <a-col :span="4">
            <a-card :title="title" :headStyle="headStyle">
                <a-form :form="form" @submit="onSubmit">
                    <a-form-item label="email">
                        <a-input
                            placeholder="Please input your email"
                            v-decorator="[
                                'email',
                                { rules: [{ required: true, message: 'email is required!' }] },
                            ]"
                        />
                    </a-form-item>
                    <a-form-item
                      :validate-status="notEqualPassword() ? 'error' : ''"
                      label="password"
                    >
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
                        <a-select
                          v-decorator="[
                            'country',
                            {
                              initialValue: 'KR',
                              rules: [{ required: false, message: 'country is required!' }]
                            },
                          ]"
                        >
                            <a-select-option value="KR">South Korea</a-select-option>
                            <a-select-option value="US">United States</a-select-option>
                            <a-select-option value="JA">Japan</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="birth">
                        <a-date-picker
                          v-decorator="[
                            'birth',
                            {
                              rules: [{ required: false, message: 'birth is required!' }]
                            },
                          ]"
                          placeholder="Please Select your birth"
                          format="YYYY-MM-DD"
                        />
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
import moment from 'moment';
import { api } from '@/configs';
import { store } from '@/store';

export default {
  name: 'user',
  data() {
    return {
      form: this.$form.createForm(this),
      title: 'Sign Up',
      willCreateUser: true,
      headStyle: {
        fontSize: '25px',
      },
    };
  },
  mounted() {
    const { id } = this.$route.params;
    if (id) {
      this.title = 'Modify';
      this.willCreateUser = false;
      this.setUserDataToForm();
    }
  },
  methods: {
    setUserDataToForm() {
      const user = { ...store.getters.currentUser };
      delete user.password;
      delete user.passwordconfirm;
      user.birth = moment(user.birth);
      this.form.setFieldsValue(user);
    },
    onSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (err) {
          return;
        }

        if (this.willCreateUser && this.isExistUser(values)) {
          this.$warning({
            title: 'already exist email',
          });
          return;
        }

        const params = api.users(
          (this.willCreateUser) ? null : 1,
          {
            ...values,
            birth: (values.birth) ? values.birth.format('YYYY-MM-DD') : null,
          },
        );

        const dispatcherName = (this.willCreateUser) ? 'createUser' : 'updateUser';
        store
          .dispatch(dispatcherName, params)
          .then((res) => {
            this.$success({
              title: 'Success!',
              content: JSON.stringify(res.data),
              onOk: () => {
                this.$router.push('/home').catch(() => {});
              },
            });
          })
          .catch((error) => {
            this.$error({
              title: 'error!',
              content: error.toString(),
            });
          });
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    notEqualPassword() {
      const { getFieldValue } = this.form;
      return getFieldValue('password') !== getFieldValue('passwordconfirm');
    },
    isExistUser({ email }) {
      return Object.values(store.state.users).some(obj => obj.email === email);
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-card-bordered{
    border: 0px;
}

.mgL{
    margin-left: 10px;
}

.userLayout {
  height: 100vh;
}
</style>
