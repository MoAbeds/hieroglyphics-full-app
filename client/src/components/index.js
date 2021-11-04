import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './website'
import Detect from './Detect'
export default class index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact  path='/' component={Home} />
                <Route path={'/detect'}  component={Detect} />
                </Switch>
            </Router>
        )
    }
}
