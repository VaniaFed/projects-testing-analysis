import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProjectsPage } from 'pages/projects-page';
import { ProjectPage } from 'pages/project-page';
import { LoginPage } from 'pages/login-page';
import { RegisterPage } from './pages/register-page';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProjectsPage} />
            <Route path="/projects/:id" component={ProjectPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </Switch>
    );
};
