import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import global style
import '@/styles/root.scss';

// service worker
import * as serviceWorker from '@/serviceWorker';

// locale을 설정합니다.
import koKR from 'antd/es/locale/ko_KR';
import moment from 'moment';
import 'moment/locale/ko';

// default Route
import { AuthRoute } from '@/router';
import { Login } from '@/pages';
import { apolloClient } from '@/graphql/apollo';

import App from '@/App.tsx';
moment.locale('ko');

// theme 설정 : scss variable로 작성한 scss파일을 antd 초기화에 사용하고 styled-components의 theme로 사용
// 각 styled component에서는 prop.theme로 scss varialble을 접근할 수 있다.
// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/variables.scss');

// Provider 정의
// ConfigProvider = https://ant.design/components/config-provider/

const Root = () => {
  return (
    <ConfigProvider locale={koKR}>
     <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </ConfigProvider> 
  )
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
