var url = require("url");

var testPromiseSimple = require("../controller/testPromiseSimple");

function route(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("About to route a request for " + pathname);
    if (pathname.startsWith("/testPromiseSimple")) {
        testPromiseSimple.TestPromise(res);
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Unknown Route\n');
    }
}

exports.route = route;
