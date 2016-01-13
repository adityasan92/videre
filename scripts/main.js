import 'babel-core/polyfill';
import 'fastclick';
import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
//alert('Hello World');
require('../styles/main.scss');
//import 'jquery';
require('bootstrap');
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
