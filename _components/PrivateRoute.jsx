import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//CREATING A PRIVATE ROUTE FOR THE LOGIN PAGE
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)