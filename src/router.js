'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Header from "./modules/header"
import Catalog from "./modules/catalog"


const mapStateToProps = function(store) {
    return {
        profile: store.profileState.profile,
        catalog: store.catalogState.catalog,
    };
};
export const ConnectedHeader = connect(mapStateToProps)(Header);
export const ConnectedCatalog = connect(mapStateToProps)(Catalog);