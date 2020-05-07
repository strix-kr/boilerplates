import React from 'react';
import { Layout, Icon } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_LOCAL_STATE } from '@/graphql/queries/localState';
import { WithFullLayout } from '@/layouts';
import logo from '@/assets/logo.svg';

const { Content } = Layout;

function Container() {
  const { loading, error, data } = useQuery(GET_LOCAL_STATE);  

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error</p>;

  const { users, status: { currentUserId } } = data;
  const { email, password, name, gender, country, birth } = users.find(obj => obj.id === currentUserId);

  return (
    <Layout className="home">
      <Content>
        <Icon component={logo} />
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
