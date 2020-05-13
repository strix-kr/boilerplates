import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const AuthRoute: React.FunctionComponent<RouteProps> = (props) => {
  const { children, ...rest } = props;
  const isLogin = true;
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default AuthRoute;