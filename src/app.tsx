import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProjectsPage } from 'src/pages/projects-page';
import { ProjectPage } from 'src/pages/project-page';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProjectsPage} />
            <Route path="/projects/:id" component={ProjectPage} />
        </Switch>
    );
};
