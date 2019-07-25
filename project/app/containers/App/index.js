/* eslint-disable import/no-unresolved */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Login from '../LoginPage';
import { PrivateRoute } from '../../components/_components/PrivateRoute';
import { AdminPage } from '../AdminPage';
import { history, Role } from '../../components/_helpers';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute
            path="/admin"
            roles={[Role.Admin]}
            component={AdminPage}
          />
          <Route path="/login" component={Login} />
        </Switch>
        <GlobalStyle />
      </div>
    </Router>
  );
}
