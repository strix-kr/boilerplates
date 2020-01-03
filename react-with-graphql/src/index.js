import React from 'react';
import { render } from 'react-snapshot';
import { ConfigProvider } from 'antd';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import global style
import '@/styles/root.scss';

// locale을 설정합니다.
import koKR from 'antd/es/locale/ko_KR';
import moment from 'moment';
import * as serviceWorker from '@/serviceWorker';
import 'moment/locale/ko';

// default Route
import { AuthRoute } from '@/router';
import { Login } from '@/pages';
import { apolloClient } from '@/graphql/apollo';

import App from './App';

moment.locale('ko');

// Provider 정의
// ConfigProvider = https://ant.design/components/config-provider/

const Root = () => {

  return (
    <ConfigProvider locale={koKR}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthRoute path="*">
              <App />
            </AuthRoute>
          </Switch>
        </Router>
      </ApolloProvider>
    </ConfigProvider> 
  )
};

render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
