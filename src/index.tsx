import { ConnectedRouter as Router } from 'connected-react-router/immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import routes from './app.routes';
import store, { history } from './app.store';

/* Styles */
import './app.scss';

/**
 * Render application
 */
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{renderRoutes(routes)}</Router>
    </Provider>,
    document.querySelector('#root')
);
