const express = require('express');
const app = express();
const http = require('http').createServer(app);;
const fs = require('fs');
const launcher = require('./js/launcher');
const cluster = require('./js/config/cluster');
const port = 1004;

let worker = cluster(app);
if(worker){
    const server = http.listen(port, () => {
        console.log(`Server is listening at localhost '${port}'`);
    });
    launcher(server);
}