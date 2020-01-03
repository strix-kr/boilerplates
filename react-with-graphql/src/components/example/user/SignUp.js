import React, { useEffect } from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { 
  Button,
  Card, 
  Col, 
  DatePicker, 
  Form, 
  Input, 
  Row, 
  Radio, 
  Select, 
  Modal,
} from 'antd';
import moment from 'moment';
import { GET_LOCAL_STATE } from '@/graphql/queries/localState';

const SignUp = ({ form, isCreate = false, onCancel }) => {

  const history = useHistory();
  const apolloClient = useApolloClient();
  const { data: { users, status: { currentUserId } } } = useQuery(GET_LOCAL_STATE);

  const { Option } = Select;
  const { getFieldDecorator } = form;
  const title = ( isCreate ) ? 'Sign Up' : 'Modify';
  const currentUser = Object.values(users).find(obj => obj.id === currentUserId);

  useEffect(() => {
    // when modify user
    if( !isCreate ){
      const { email, gender, name, birth, country } = currentUser;
      form.setFieldsValue({
        email, 
        gender, 
        name, 
        country, 
        birth: moment(birth), 
      });
    }
  }, []);

  const isExistUser = ({ email }) => Object.values(users).some(obj => obj.email === email);

  const onCancelHandler = onCancel || function onCancelButtonClickHandler() {
    history.goBack();
  }

  const getMaxId = () => {
    const user = Object.values(users).sort((a, b) => b.id - a.id);
    return user[0] ? user[0].id + 1 : 1;
  }

  const onOk = (e) => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if(err) return;
      
      if(isCreate && isExistUser(values)){
        Modal.warning({
          title: 'already exist email',
        });
        return;
      }

      delete values.passwordconfirm;
      
      const newUserData = {
        ...values,
        birth: (values.birth) ? values.birth.format('YYYY-MM-DD') : null,
      };

      if( isCreate ){
        const id = getMaxId();
        users.push({
          ...newUserData,
          id,
        });
      } else {
        const idx = users.findIndex(obj => obj.id === currentUserId);
        users[idx] = {
          ...newUserData,
          id: users[idx].id,
        }
      }

      apolloClient.writeData({ data: { users } });
      form.resetFields();
      onCancelHandler();
    });
  }

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="userLayout"
    >
      <Col span={4}>
        <Card title={title} className="modal-card">
          <Form>
            <Form.Item label="email">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'email is required!' }]
              })(
                <Input placeholder="Please input your email" />
              )}
            </Form.Item>
            <Form.Item label="password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'password is requried!' }]
              })(
                <Input placeholder="Please input your password" type="password" />
              )}
            </Form.Item>
            <Form.Item label="passwordconfirm">
              {getFieldDecorator('passwordconfirm', {
                rules: [{ required:true, messsge: 'password confirm is rquired!' }]
              })(
                <Input placeholder="Please input yout password confirm" />
              )}
            </Form.Item>
            <Form.Item labe="name">
              {getFieldDecorator('name', {
                rules: [{ required: true, messasge: 'name is required!' }]
              })(
                <Input placeholder="Please input yout name" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('gender', {
                initialValue: 'M',
                rules: [{ required: true, message: 'gender is required!' }]
              })(
                <Radio.Group>
                  <Radio value="M">Male</Radio>
                  <Radio value="F">Femail</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="country">
              {getFieldDecorator('country', {
                initialValue: 'KR'
              })(
                <Select>
                  <Option value="KR">South Korea</Option>
                  <Option value="US">United States</Option>
                  <Option value="JA">Japan</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item labe="birth">
              {getFieldDecorator('birth')(
                <DatePicker placeholder="Please Select your birth" format="YYYY-MM-DD" />
              )}
            </Form.Item>

            <Form.Item>
              <Button onClick={onCancelHandler}>Cancel</Button>
              <Button onClick={onOk} type="primary" className="mgL">Ok</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Form.create({ name: 'user_container_form' })(SignUp);