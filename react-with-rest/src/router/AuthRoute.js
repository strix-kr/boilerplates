import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute(props) {
  const status = useSelector(state => state.status);
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        status.isLogin ? (
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
