import React from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Sider from './Sider';
import Content from './Content';

const Container = () => {
  return (
    <Layout>
      <Sider width="20%" />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
}

export default Container;