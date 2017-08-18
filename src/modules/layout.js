
import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Main from "./main";
import Profile from "./profile";
import Forbidden from "./forbidden";

const Header = () => {
    return(
        <header>
            <ul>
                <li><Link to="/main">main</Link></li>
                <li><Link to="/profile">profile</Link></li>
            </ul>
        </header>
    )
}

const Content = (props) => {
    return(
        <Switch>
            <Route path="/main" component={Main}/>
            <Route path="/403" render={(routeProps)=>{
                return(
                    <Forbidden {...props} {...routeProps}/>
                )
            }}/>
            <Route path="/profile" render={(routeProps)=>{
                return(
                    props.profile.id ?
                        <Profile {...props}/>
                        :
                        <Redirect to={{
                            pathname: '/403',
                            from: routeProps.location.pathname
                        }}/>
                )
            }}/>
        </Switch>
    )
}

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("layout render, userId", this.props.profile.id)
        return(
            <div className="wrapper">
                <Header/>
                <Content {...this.props}/>
            </div>
        )
    }
}