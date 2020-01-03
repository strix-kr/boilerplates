import React from 'react';
import { Route } from 'react-router-dom';

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
// refs = https://reacttraining.com/react-router/web/example/route-config

function SubRoutes(route) {
  const optionPathPattern = new RegExp('(:)(?<=\\:)[\\w\\W]*', 'g');
  return (
    <Route
      path={route.path.replace(optionPathPattern, '')}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default SubRoutes;
