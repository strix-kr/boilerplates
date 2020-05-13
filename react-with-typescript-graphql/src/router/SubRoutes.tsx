import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
// refs = https://reacttraining.com/react-router/web/example/route-config

interface SubRouteProps extends RouteProps {
  key: string;
  path: string;
  component: React.ComponentType<RouteProps | any> ;
  routes: any[]
}

const SubRoutes: React.FunctionComponent<SubRouteProps | null> = (route: SubRouteProps) => {
  const optionPathPattern = new RegExp('(:)(?<=\\:)[\\w\\W]*', 'g');
  return (
    <Route
      path={route.path.replace(optionPathPattern, '')}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes || []} route={route} />
      )}
    />
  );
}

export default SubRoutes;