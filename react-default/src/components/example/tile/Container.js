import React from 'react';
import { Layout } from 'antd';

import Sider from './Sider';
import Content from './Content';

function Container() {
  return (
    <Layout>
      <Sider />
      <Content />
    </Layout>
  );
}

export default Container;
