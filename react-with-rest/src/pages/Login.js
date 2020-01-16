import React, { useState } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Form, Icon, Input, Button, Row, Col, Layout, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import { status } from '@/store/actions';

import SignUp from '@/components/example/user/Content';

const { Content } = Layout;

function Login(props) {
  const { getFieldDecorator } = props.form;
  const dipatch = useDispatch();
  const history = useHistory();
  const state = useStore().getState();
  const [modalState, setModalState] = useState({
    visible: false,
  });

  const getUser = ({ email }) =>
    Object.values(state.users).find(obj => obj.email === email);

  const isValidAccount = ({ email, password }) => {
    const user = getUser({ email });
    return user && user.password === password;
  };

  const onLogin = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err) return;

      if (isValidAccount(values)) {
        const user = getUser(values);
        dipatch(status.login(user));
        history.push('/');
      } else {
        Modal.error({
          title: 'Fail',
          content: 'invalid Account!',
        });
      }
    });
  };

  const toggleModal = () => {
    setModalState({
      ...modalState,
      visible: !modalState.visible,
    });
  };

  return (
    <Layout>
      <Content>
        <Row
          type="flex"
          justify="space-around"
          align="middle"
          style={{ height: '100vh' }}
        >
          <Col span={6} style={{ maxWidth: '300px' }}>
            <Form onSubmit={onLogin} className="login-form">
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'Please input your username!' },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your Password!' },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: '100%' }}
                >
                  Log in
                </Button>
                <Button block onClick={toggleModal}>
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Modal
        onCancel={toggleModal}
        className="modal-card hide"
        visible={modalState.visible}
      >
        <SignUp onCancel={toggleModal} isCreate="true" />
      </Modal>
    </Layout>
  );
}

export default Form.create()(Login);
