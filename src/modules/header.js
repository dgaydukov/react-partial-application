'use strict';

/*
 * React header component
 */

import React from 'react';
import { connect } from 'react-redux';
import {login} from "../api/webapi";

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    login(){
        login();
    }

    render(){
        return(
            <div>
                <div>auth</div>
                {!this.props.profile.id && <button onClick={::this.login}>login</button>}
            </div>
        )
    }
}


export default connect(store => {
    return{
        profile: store.profileState.profile,
        catalog: store.catalogState.catalog,
    }
})(Header);