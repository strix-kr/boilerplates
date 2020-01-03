import React from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { Layout, Button, Spin } from 'antd';

import { GET_STATUS } from '@/graphql/queries/localState';

import '@/styles/app/components/example/local/Container.scss';

const { Content } = Layout;

const Container = () => {

  const apolloClient = useApolloClient();
  const { data: { status } } = useQuery(GET_STATUS);
  const { isLoading } = status;

  const writeQuery = (_isLoading) => {
    apolloClient.writeQuery({ query: GET_STATUS, data: {
      status: {
        ...status,
        isLoading: _isLoading,
      }
    }}); 
  }

  const changeState = () => {
    writeQuery(!isLoading);
    setTimeout(() => writeQuery(isLoading), 1000);
  }

  return (
    <Layout>
      <Content>
        <div className="local-state-area">
          {isLoading 
          ? <div className="Loading">Loading</div>
          :<div className="Loaded">Loaded</div>
          }
          <div className="view-state">{ JSON.stringify(status)}</div>
          <div>{isLoading ? <Spin size="large" /> : null}</div>
          <Button onClick={changeState}>click here!</Button>
        </div>
      </Content>
    </Layout>
  )
}

export default Container;