import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Route, Redirect } from 'react-router-dom';

import { GET_STATUS } from '@/graphql/queries/localState';

export default function AuthRoute({ children, ...rest }) {
  const {
    data: { status },
  } = useQuery(GET_STATUS);
  const { isLogin } = status;

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
