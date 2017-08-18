# React Redirect Strategy

What kind of strategy can exist in redirection? Really, if you need it just do it. If user is not authorized on website, and tries to go into profile, just redirect him into 
403 (forbidden), game over.
But the problem is back-end server response time. Just imagine, user opens webpage, and clicks on profile page. In order to check if a user has rights to access this page, 
we execute backend
request to e.g. /user/profile and wait. If request executes 100ms, it's fine, user willn't even notice. But if request takes 5 sec, then it will be a problem.
You have 2 cases
1) Wait 5 sec, show user some kind of loader, then show profile or redirect him to 403
2) Assume that user unathorized, immediately redirect to 403, and wait for response. When you got success response, you redirect your user back to profile

So this project shows exclusive way how to make the second case in react.

## Getting Started

In order to start, you should clone this repo. You also need node & npm infrastructure installed.

### Prerequisites

As I'm a linux user, this project is best works with linux, but it can work in windows environment too.

### Project Structure
```
app
-webpack.node.server.js - file with node.js server
build #directory with compiled project
npm #directory with build scripts (npm natives & webpack config)
src #directory with project
```

### Installing

* Clone repository ```git clone https://github.com/dgaydukov/react-redirect-strategy.git```
* Go to react ```cd react-redirect-strategy```
* Install ```npm i```
* Run and enjoy ```npm start```

## Built With

* [React 15.0](https://facebook.github.io/react/blog/2016/04/07/react-v15.html) - The web framework


## Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)