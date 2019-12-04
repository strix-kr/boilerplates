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
import { api, fetcher, util } from '@/configs'

export default {
    name: 'ContentHeader',
    props: {
        type: {
            type: String,
            default: null,
        }
    },
    data () {
        return {
            form: this.$form.createForm(this, { name: 'createForm' }),
            modal: {
                visible: false
            },
        }
    },
    methods: {
        toggleModal () {
            this.modal.visible = !this.modal.visible
        },
        onCreateItem () {
            this.form.validateFields((err, values) => {
                if(err) return
                
                const { url, param } = api[this.type](null, values)

                fetcher
                .post(url, param)
                .then((res) => {
                    if(res.status !== 201){
                        console.error(res)
                        alert('fail!')
                    }
                    
                    alert(`success! \n\n ${JSON.stringify(res.data)}`)
                    this.modal.visible = false
                })
            })
        },
    }

}
</script>

<style lang="scss" scoped>
.ant-btn.ant-btn-primary{
    float: right;
}
</style>