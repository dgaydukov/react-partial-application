'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {ConnectedHeader, ConnectedCatalog} from "./router";

window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedHeader />
        </Provider>,
        document.getElementById('header')
    );
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedCatalog />
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