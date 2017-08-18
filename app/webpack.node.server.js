
const express = require('express'),
    exec = require('child_process').exec,
    webpack = require("webpack"),
    sendevent = require('sendevent'),
    webpackConfig = require("./../npm/webpack.node.server.config"),
    compiler = webpack(webpackConfig),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    events = sendevent('/eventstream'),
    port = process.env.port || process.env.PORT || 3000,
    host = "127.0.0.1",
    url = `http://${host}:${port}`;


//use Server-Sent Events with express server
app.use(events);

//serve static (css, js, images)
app.use(express.static(path.join(__dirname, './../build')));

//redirect every request to index.html, so we can use browserRouter (instead of hashRouter)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './../build/index.html'));
});

let isFirstStart = true;
compiler.watch({
    aggregateTimeout: 300,
    poll: true,
}, function(err, stats) {
    var jsonStats = stats.toJson();
    if(err){
        console.log("webpack error", err);
    }
    if(jsonStats.errors.length > 0){
        console.log("webpack stats error", jsonStats.errors);
    }
    if(jsonStats.warnings.length > 0){
        console.log("webpack stats warnings", jsonStats.warnings);
    }
    console.log("react.banki watch: change detected");
    events.broadcast({reload: true});
    if(isFirstStart){
        console.log(`opening browser ${url} ...`);
        exec(`x-www-browser ${url}`);
        isFirstStart = false;
    }
});

app.listen(port, host, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log(`Listening ${url}`);
});




