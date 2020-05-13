import React, { Suspense } from 'react';
import { Switch, SwitchProps } from 'react-router-dom';
import { routes, SubRoutes } from '@/router';

import { Spinner } from '@/components/commons';

const App: React.FunctionComponent<SwitchProps> = () => (
  <Suspense fallback={<Spinner tip="로딩중입니다." size="large" />}>
    <Switch>
      {routes.map((route: any) => <SubRoutes key={route.path} {...route} />)}
    </Switch>
  </Suspense>
);

export default App;
