
import React from 'react';
import {Redirect} from 'react-router-dom';

export default class Forbidden extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const profilePath = "/profile";
        if(this.props.profile.id && this.props.location.from == profilePath){
            return(
                <Redirect to={profilePath}/>
            )
        }
        return(
            <h1>You are not allowed to access this page</h1>
        )
    }
}