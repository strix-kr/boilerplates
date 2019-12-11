<template>
    <div>
        <a-button type="primary" @click="toggleModal">Add</a-button>

        <a-modal
            :visible="modal.visible"
            title="Add Item"
            okText="Create"
            cancelText="Cancel"
            @cancel="toggleModal"
            @ok="onCreateItem"
        >
            <a-form :form="form">
                <a-form-item label="title" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
                <a-input
                    v-decorator="['title', { rules: [{ required: true, message: 'Please input title!' }] }]"
                />
                </a-form-item>
                <a-form-item label="body" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
                <a-input
                    v-decorator="['body', { rules: [{ required: true, message: 'Please input body!' }] }]"
                />
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
import { store, type } from '@/store';

export default {
  name: 'ContentHeader',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'createForm' }),
      modal: {
        visible: false,
      },
    };
  },
  methods: {
    toggleModal() {
      this.modal.visible = !this.modal.visible;
    },
    onCreateItem() {
      this.form.validateFields((err, values) => {
        if (err) return;

        store.commit(type.ADD_ITEM, values);
        this.toggleModal();
      });
    },
  },

};
</script>

<style lang="scss" scoped>
.ant-btn.ant-btn-primary{
    float: right;
}
</style>
