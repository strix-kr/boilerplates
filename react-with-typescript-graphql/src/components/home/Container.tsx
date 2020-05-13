import React from 'react'
import { NavLink } from 'react-router-dom';
import { Row, Col, Layout, Menu } from 'antd';

import { Footer } from '@/layouts';
import { service } from '@/configs';
import { routes } from '@/router';

import logo from '@/assets/logo.svg';

const { Content } = Layout;

function Container(props) {
  return (
    <Layout className="home-container">
      <Content className="home-content">
        <Row justify="center" align="middle" style={{ height: '100%' }}>
          <Col>
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
            <div>
              <img src={logo} className="logo" alt="logo" />

              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  )
}

export default Container
