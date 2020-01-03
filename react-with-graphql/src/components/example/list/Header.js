import React, { useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { Form, Button, Input, Modal } from 'antd';

import { ALL_POSTS } from '@/graphql/queries/posts';
import '@/styles/app/components/example/list/Header.scss';

const Header = ({ form, localPosts, beginRefeshPosts }) => {

  const apolloClient = useApolloClient();
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

      const maxIdPost = localPosts.sort((a, b) => b.id - a.id)[0];
      const maxId = ( maxIdPost ) ? maxIdPost.id/1 + 1 : 0;
      values.id = maxId;
      localPosts.unshift(values);
      apolloClient.writeQuery({
        query: ALL_POSTS,
        data: { allPosts: localPosts }
      });
      beginRefeshPosts(true);
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