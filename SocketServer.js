const app = require('express')();
const http = require('http').createServer(app);;
const launcher = require('./js/launcher');
const cluster = require('./js/config/cluster');
const fs = require('fs');
const port = 1004;

let worker = cluster(app);
if(worker){
    // launcher(app, port);
    app.listen(port, () => {
        console.log(`Server is listening at localhost '${port}'`);
    });
}