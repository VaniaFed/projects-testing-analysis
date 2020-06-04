import React from 'react';
import { LoginPage } from 'pages/login-page';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterPage } from './pages/register-page';

export const UnauthenticatedApp = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect to="/login" />
        </Switch>
    );
};
