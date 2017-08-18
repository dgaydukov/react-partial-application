'use strict';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from "./modules/layout"

const Router = (props) => {
    return (
        <BrowserRouter>
            <Layout {...props}/>
        </BrowserRouter>
    )
};
const mapStateToProps = function(store) {
    return {
        profile: store.profileState.profile,
    };
};
export const ConnectedRouter = connect(mapStateToProps)(Router);