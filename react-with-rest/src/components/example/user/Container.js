import React from 'react';
import { Layout } from 'antd';

import InputForm from './Content';

import '@/styles/app/components/example/user/Container.scss';

const Container = () => {
  return (
    <Layout className="user-layout">
      <InputForm />
    </Layout>
  )
}

export default Container;