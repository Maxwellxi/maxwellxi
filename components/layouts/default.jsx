require('../src/assets/styles/all.scss');
import React from 'react'
import { Helmet } from "react-helmet"
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'

import pageNotFound from '../pages/pageNotFound'

export default class LayoutSite extends React.Component {
    render() {
        return (
        <div className="xi" >
            <Helmet titleTemplate="MySite.com - %s">
                <meta charSet="utf-8" />
                <title>My Titles - default - {location.pathname}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie-edge" />
                <link rel="stylesheet" href="styles.css" />
            </Helmet>
            <Router>
                <Switch>
                    <Route exact path="/" render={()=>  <div>Home</div>} />
                    <Route exact path="/test" render={()=> <div>hi test</div>} />
                    <Route component={pageNotFound} />
                </Switch>
            </Router>
        </div>
        )
    }
}
