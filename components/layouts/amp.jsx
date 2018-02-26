import React from 'react'
import { Helmet } from "react-helmet"

export default class LayoutAmp extends React.Component {
    render() {
        return (
            <div className="AmpSite" >
            <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie-edge" />
            <title>My Titles - Amp</title>
            {/* <link rel="stylesheet" href="styles.css" /> */}
            </Helmet>
            
           
                Amp
            </div>
        )
    }
}
