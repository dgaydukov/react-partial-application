'use strict';

/*
* React entry point
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import Header from "./modules/header";
import Catalog from "./modules/catalog";

window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Header />
        </Provider>,
        document.getElementById('header')
    );
    ReactDOM.render(
        <Provider store={store}>
            <Catalog />
        </Provider>,
        document.getElementById('catalog')
    );
}




/**
 my custom HMR simulation
 */
var sendevent = require('sendevent');
if(process.env.NODE_ENV != "production"){
    sendevent('/eventstream', function(event) {
        if(event.reload){
            window.location.reload();
        }
    });
}