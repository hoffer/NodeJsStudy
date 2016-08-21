var http = require('http');
var port = process.env.port || 1337;
var router = require("./router/router");

http.createServer(function (req, res) {
    router.route(req, res);
}).listen(port);

