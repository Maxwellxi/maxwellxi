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
                <Helmet>
                <title>My Titles - default</title>
                <link rel="stylesheet" href="styles.css" />
                </Helmet>
                
                <Router>
                <Switch>
                    <Route path="/" render={()=> <div>Home</div>} />
                    <Route exact path="/test" render={()=> <div>hi test</div>} />
                    <Route component={pageNotFound} />
                </Switch>
            </Router>
            </div>
        )
    }
}
