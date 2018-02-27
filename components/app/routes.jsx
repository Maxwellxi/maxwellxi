import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
 
import LayoutSite from '../layouts/default'
import LayoutAmp from '../layouts/amp'

const layoutRoutes = [
  {
    path:'/',
    component: LayoutSite //main website
  },
  {
    path:'/amp',
    component: LayoutAmp, //amp website
  }
]

const Routes  = () => (
  <Router>
      <Switch>
        {layoutRoutes.map((route) =>
          <Route 
          exact 
          path={route.path} 
          component={route.component} />
        )}
      </Switch>
  </Router>
)

export default Routes