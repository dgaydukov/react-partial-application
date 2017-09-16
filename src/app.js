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

/*
* Render function, checks if html id exists, and only in this case apply React to element
 */
const render = (id, Component) => {
    if(document.getElementById(id)){
        ReactDOM.render(
            <Provider store={store}>
                <Component />
            </Provider>,
            document.getElementById(id)
        );
    }
}

window.onload = () => {
    render("header", Header);
    render("catalog", Catalog);
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