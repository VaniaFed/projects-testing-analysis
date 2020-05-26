import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'src/app';

import 'common/style-guide/global.scss';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
