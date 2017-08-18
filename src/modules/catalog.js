'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Catalog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <ul>offers
                    {this.props.catalog.map((item,i)=>{
                        return(
                            <li key={i}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default connect(store => {
    return{
        profile: store.profileState.profile,
        catalog: store.catalogState.catalog,
    }
})(Catalog);