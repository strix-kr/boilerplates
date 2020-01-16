import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
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
import { api } from '@/configs';
import { user } from '@/store/actions';

const Content = ({ form, isCreate = false, onCancel }) => {

  const { Option } = Select;
  const { getFieldDecorator } = form;
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users, shallowEqual);
  const currentUser = useSelector(state => state.users[state.status.currentUserId], shallowEqual);
  const title = ( isCreate ) ? 'Sign Up' : 'Modify';

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
  }, [form, isCreate, currentUser]);

  const isExistUser = ({ email }) => Object.values(users).some(obj => obj.email === email);

  const onCancelHandler = onCancel || function onCancelButtonClickHandler() {
    history.goBack();
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

      const params = api.users(
        (isCreate) ? null : currentUser.id,
        {
          ...values,
          birth: (values.birth) ? values.birth.format('YYYY-MM-DD') : null,
        },
      );

      const action = (isCreate) ? user.createAsync(params) : user.updateAsync(params);
      dispatch(action);
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

export default Form.create({ name: 'user_container_form' })(Content);