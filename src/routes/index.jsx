'use strict';
import React, { Component } from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import { App, LoginApp, RegisterApp, OrderApp, User } from '../containers'

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
// var history = browserHistory;
const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={OrderApp}/>
            <Route path="/login" component={LoginApp}></Route>
            <Route path="/register" component={RegisterApp}></Route>
            <Route path="/order" component={OrderApp}></Route>
            <Route path="/user" component={User}></Route>
        </Route>
    </Router>
);

export default RouteConfig;