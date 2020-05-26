import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProjectsPage } from 'src/pages/projects-page';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProjectsPage} />
        </Switch>
    );
};
