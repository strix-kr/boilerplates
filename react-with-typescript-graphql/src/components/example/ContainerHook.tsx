import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import { Row, Col, Layout, Menu } from 'antd';

import { Spinner } from '@/components/commons';
import { service } from '@/configs';
import { routes } from '@/router';
import { Footer } from '@/layouts';

import TestHook from '@/graphql/queries/TestHook.gql';

const { Content } = Layout;

function Container(props){
  const { loading, error, data } = useQuery(TestHook, {
    fetchPolicy: 'network-only'
  });
  const result = service.getValue(data, 'trade', {});
  if (error) {
    return console.log('error', error)
  }
  if (loading) {
    return (<Spinner tip="fetching" size="large" />)
  }
  
  return (
    <Layout className="example-hook-container">
      <Content style={{ height: 'calc(100vh - 70px)' }}>
        <Row justify="center" align="top" style={{ height: '100%', textAlign: 'center' }}>
          <Col span={24}>
            <Menu mode="horizontal" selectedKeys={[props.location.pathname]}>
              {routes.filter(route => service.getValue(route, 'meta.navigation.show', false)).map(route => {
                return (
                  <Menu.Item key={route.path}>
                    <NavLink to={route.path}>
                      {route.name}
                    </NavLink>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Col>
          <Col span={24}>
            <code>{JSON.stringify(result)}</code>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};
export default Container;