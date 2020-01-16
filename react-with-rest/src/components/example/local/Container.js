import React, { useState, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Layout, Button, Spin } from 'antd';
import { status } from '@/store/actions';

import '@/styles/app/components/example/local/Container.scss';

const { Content } = Layout;

const Container = () => {

  const dispatch = useDispatch();
  const store = useStore();
  const [ isActive, toggleState ] = useState(false);
  const [ localState, refreshState ] = useState(store.getState().status);

  useEffect(() => {
    refreshState(isActive);
  }, [isActive]);

  const changeState = () => {
    dispatch(status.loadingBegin());
    toggleState(!isActive);
    setTimeout(() => {
      dispatch(status.loadingEnd());
      toggleState(isActive);
    }, 1000);
  }

  return (
    <Layout>
      <Content>
        <div className="local-state-area">
          {isActive 
          ? <div className="Loading">Loading</div>
          :<div className="Loaded">Loaded</div>
          }
          <div className="view-state">{ JSON.stringify(localState)}</div>
          <div>{localState.isLoading ? <Spin size="large" /> : null}</div>
          <Button onClick={changeState}>click here!</Button>
        </div>
      </Content>
    </Layout>
  )
}

export default Container;