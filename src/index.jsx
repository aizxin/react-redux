'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import createStore from './store'
let store = createStore();
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}>
	{routes}
	</Provider>, root
);