import React from 'react'
import { Helmet } from "react-helmet"
// require('../src/assets/styles/all.scss');

class HeadSite extends React.Component {
  render () {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie-edge" />
                <title>My Title</title>
                <link rel="stylesheet" href="styles.css" />
            </Helmet>
        </div>
    )
  }
}
