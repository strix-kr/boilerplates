import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Input, Modal } from 'antd';
import { post } from '@/actions';

import '@/styles/app/components/example/list/Header.scss';

const Header = ({ form }) => {

  const dispatch = useDispatch();
  const { getFieldDecorator } = form;
  const [ modalState, setModalState ] = useState({
    visible: false,
  });

  const toggleModal = () => {
    setModalState({
      ...modalState,
      visible: !modalState.visible,
    });
  }

  const onCreateItem = () => {
    form.validateFields((err, values) => {
      if(err) return;
      dispatch(post.addItem(values));
      toggleModal();
    })
  }

  return (
    <div className="content_header">
      <Button type="primary" onClick={toggleModal}>
        Add
      </Button>

      <Modal
        visible={modalState.visible}
        title="Add Item"
        okText="Create"
        cancelText="Cancel"
        onOk={onCreateItem}
        onCancel={toggleModal}
      >
        <Form>
          <Form.Item label="title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input title!' }]
            })(
              <Input />
              )}
          </Form.Item>
          <Form.Item label="body">
            {getFieldDecorator('body', {
              rules: [{ required: true, message: 'Please input body!' }]
            })(
              <Input />
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Form.create({ name: 'list_header_form' })(Header);