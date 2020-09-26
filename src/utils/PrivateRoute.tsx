import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const jwt = useSelector((state: any) => state.user.jwt);
  return (
    <Route
      {...rest}
      render={props => {
        if (jwt) {
          return <Component {...props} />;
        }
        return <Redirect to='/login' />;
      }}
    />
  );
};

export default PrivateRoute;
