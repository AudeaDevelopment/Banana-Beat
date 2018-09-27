import React, { Fragment } from 'react';
import 'babel-polyfill';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './app';

ReactDom.render(
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root'),
);
