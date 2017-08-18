'use strict';

import React from 'react';
import {login, getCatalog} from "../api/webapi";

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    login(){
        login();
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <div>auth</div>
                <button onClick={::this.login}>login</button>
            </div>
        )
    }
}