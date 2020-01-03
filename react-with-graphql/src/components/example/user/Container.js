import React from 'react';
import { Layout } from 'antd';

import Content from './SignUp';

import '@/styles/app/components/example/user/Container.scss';

const Container = () => {
  return (
    <Layout className="user-layout">
      <Content />
    </Layout>
  )
}

export default Container;