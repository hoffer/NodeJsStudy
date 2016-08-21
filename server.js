var http = require('http');
var port = process.env.port || 1337;
var router = require("./router/router");

http.createServer(function (req, res) {
    router.route(req, res);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

