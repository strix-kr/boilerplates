import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Layout } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';

import { fakeAuth } from '@/components/commons';

const { Content } = Layout;

const Login = props => {
  const { getFieldDecorator } = props.form;
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    console.log('history', history);
    console.log('from', from);
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  }

  const RowStyle = {
    height: '100vh',
  };

  return (
    <Layout>
      <Content>
        <Row type="flex" justify="space-around" align="middle" style={RowStyle}>
          <Col span={6} style={{ maxWidth: '300px' }}>
            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
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
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <span className="login-form-forgot" style={{ float: 'right' }}>
                  Forgot password
                </span>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: '100%' }}
                >
                  Log in
                </Button>
                Or <span>register now!</span>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Form.create()(Login);
