<template>
  <a-form :form="form" v-bind="formItemLayout">
    <h2>Detail</h2>
    <a-form-item label="id">
      <span class="ant-form-text">
        {{ getValue(site, 'id', '') }}
      </span>
    </a-form-item>
    <a-form-item
      label="name"
    >
      <a-input
        v-if="!isReadMode"
        v-decorator="['name',
        {
          rules: [{ required: true, message: '이름을 입력하세요' }],
          initialValue: getValue(site, 'name', '')
        }]"
        :autoFocus="true"
        autocomplete="off"
        placeholder="이름"
      />
      <span v-else class="ant-form-text">
        {{ getValue(site, 'name', '') }}
      </span>
    </a-form-item>

    <a-form-item label="address">
      <span class="ant-form-text">
        {{ getValue(site, 'address', '') }}
      </span>
    </a-form-item>

    <div :style="{ textAlign: 'center' }" v-if="$route.params.mode">
      <a-button v-if="!isReadMode" type="default" @click="onCancel" :style="{ marginRight: '10px' }">취소</a-button>
      <a-button type="primary" @click="onChangeMode">{{ $route.params.mode === 'read' ? '수정' : '저장' }}</a-button>
    </div>
  </a-form>
</template>

<script>
import { service } from '@/configs';

import { mutationErrorHandler } from '@/graphql/apollo';
import Site from '@/graphql/queries/Site.gql';
import UpdateSite from '@/graphql/mutations/UpdateSite.gql';

export default {
  name: 'ContentWrap',
  data() {
    return {
      site: null,
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 8 },
      },
    };
  },
  computed: {
    isReadMode() {
      return this.$route.params.mode ? this.$route.params.mode === 'read' : true;
    },
  },
  methods: {
    getValue(obj, key, defaultValue) {
      return service.getValue(obj, key, defaultValue);
    },
    onChangeMode() {
      const { mode } = this.$route.params;
      if (mode === 'update') {
        this.form.validateFields((err, values) => {
          if (!err) {
            const { name } = values;
            const payload = {
              ...this.site,
              name,
            };

            delete payload.__typename;

            this.$apollo.mutate({
              mutation: UpdateSite,
              variables: {
                input: payload,
              },
            }).then(({ data }) => {
              if (data) {
                this.$apollo.queries.site.refetch();
              }
            }).then(() => this.$router.push({
              ...this.$route,
              params: {
                ...this.$route.params,
                mode: 'read',
              },
            })).catch((error) => {
              mutationErrorHandler(error);
            });
          }
        });
        return true;
      }
      return this.$router.push({
        ...this.$route,
        params: {
          ...this.$route.params,
          mode: 'update',
        },
      });
    },
    onCancel() {
      if (this.$route.params.mode === 'update') {
        return this.$router.push({
          ...this.$route,
          params: {
            ...this.$route.params,
            mode: 'read',
          },
        });
      }
      return true;
    },
  },
  apollo: {
    site: {
      query: Site,
      skip() {
        return !this.$route.params.id;
      },
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      update(data) {
        return service.getValue(data, 'trade.viewer.role.site', null);
      },
    },
  },

};
</script>

<style scoped>

</style>
