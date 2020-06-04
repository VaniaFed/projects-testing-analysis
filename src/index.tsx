import React from 'react';
import { render } from 'react-dom';
import { App } from 'src/app';
import { BrowserRouter as Router } from 'react-router-dom';

import 'common/style-guide/global.scss';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
