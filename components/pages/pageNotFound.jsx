import React from 'react'
import { Helmet } from "react-helmet"

export default class pageNotFound extends React.Component {
    render() {
        return (
            <div className="xi-pageNotfound" >
                <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie-edge" />
                <title>My Titles - default - pageNotfound</title>
                </Helmet>
                pageNotfound
            </div>
        )
    }
}