import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Layout } from 'antd';

import { WithFullLayout } from '@/layouts';
import logo from '@/assets/logo.svg';

const { Content } = Layout;

function Container() {

  const { email, password, name, gender, country, birth } = useSelector(state => state.users[state.status.currentUserId], shallowEqual);
  
  return (
    <Layout className="home">
      <Content>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="hello">
          <h3>email: {email}</h3>
          <h3>password: {password}</h3>
          <h3>name: {name}</h3>
          <h3>gender: {gender}</h3>
          <h3>country: {country}</h3>
          <h3>birth: {birth}</h3>
        </div>
        <br />
      </Content>
    </Layout>
  );
}

export default WithFullLayout(Container);
