<template>
  <a-layout class="container">
    <content-layout>
      <template v-slot:title>
        <div>File Upload</div>
      </template>
      <template v-slot:content>
          <a-upload-dragger
            name="file"
            :multiple="true"
            :remove="onRemove"
            :fileList="fileList"
            @change="onChange"
          >
            <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
          </a-upload-dragger>
      </template>
    </content-layout>
  </a-layout>
</template>

<script>
import { Content } from '@/layouts';

import UploadFile from '@/graphql/mutations/UploadFile.gql';
import ChangeLoading from '@/graphql/mutations/ChangeLoading.gql';
import { mutationErrorHandler } from '@/graphql/apollo';

export default {
  name: 'Container',
  components: {
    'content-layout': Content,
  },
  data() {
    return {
      fileList: [],
    };
  },
  computed: {

  },
  methods: {
    onRemove(...args) {
      console.log('onRemove', args);
    },
    onChange({ file, fileList }) {
      console.log('file', file);
      console.log('fileList', fileList);
      this.fileList = fileList;
    },
    // 각 개별 파일 업로드는 beforeUpload hook에서 mutation으로 전송
    beforeUpload(file, fileList) {
      this.$apollo.mutate({ mutation: ChangeLoading, variables: { loading: true } });
      this.$apollo.mutate({
        mutation: UploadFile,
        variables: {
          file,
        },
      }).then(({ data }) => {
        console.log('data', data);
        if (data) {
          this.fileList = fileList;
        }
      }).catch((err) => {
        mutationErrorHandler(err);
      }).finally(() => {
        this.$apollo.mutate({ mutation: ChangeLoading, variables: { loading: false } });
      });
      return false;
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
