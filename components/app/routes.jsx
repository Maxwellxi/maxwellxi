import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import LayoutSite from '../layouts/default'
import LayoutAmp from '../layouts/amp'


export default class RoutesXi extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={LayoutSite} />
            <Route exact path="/amp" component={LayoutAmp} />
          </Switch>
      </Router>
    )
  }
}
