# React Partial Application

When you build your project from scratch React is a good choice. But what if you already have ready application, and to it's even server-side application (in php or node.js).
The point is that you have running application that builds webpages on server and then gives it to clients. How in this case React can help.
Well you can apply React partially to html blocks on webpage with ```ReactDOM.render```. In this case you don't need React router.
But what if you need to apply React not on one block (let's say auth), but on two or even three. The question arise, how these three react components can communicate together.
The answer is Redux.

So these project is simple example how apply react on 2 blocks in server-render site and connect them together.

## Getting Started

In order to start, you should clone this repo. You also need node & npm infrastructure installed.

### Prerequisites

As I'm a linux user, this project is best works with linux, but it can work in windows environment too.

### Project Structure
```
app
-webpack.node.server.js #file with node.js server
build #directory with compiled project
npm #directory with build scripts (npm natives & webpack config)
-webpack.node.server.config.js #webpack config
src #directory with project
-api #all requests to backend api
-modules #react components
-redux #redux logic
-app.js #entry point
-router.js #router config
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