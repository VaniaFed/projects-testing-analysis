import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProjectsPage } from 'pages/projects-page';
import { ProjectPage } from 'pages/project-page';
import { FilePage } from './pages/file-page';

export const AuthenticatedApp = () => {
    return (
        <Switch>
            <Route path="/projects/:id" exact component={ProjectPage} />
            <Route
                path="/projects/:projectId/files/:fileId"
                component={FilePage}
            />
            <Route path="/" exact component={ProjectsPage} />
            <Redirect to="/" />
        </Switch>
    );
};
