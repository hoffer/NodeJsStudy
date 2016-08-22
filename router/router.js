var url = require("url");

var testPromiseSimple = require("../controller/testPromiseSimple");
var testPromiseDelay = require("../controller/testPromiseDelay");
var testPromiseChain = require("../controller/testPromiseChain");
var testPromiseParallel = require("../controller/testPromiseParallel");

function route(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("About to route a request for " + pathname);

    if (pathname == "/testPromiseSimple") {
        testPromiseSimple.TestPromise(res);
    }
    else if (pathname == "/testPromiseDelay") {
        testPromiseDelay.TestPromise(res);
    }
    else if (pathname == "/testPromiseChain") {
        testPromiseChain.TestPromise(res);
    }
    else if (pathname == "/testPromiseParallel") {
        testPromiseParallel.TestPromise(res);
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Unknown Route\n');
    }
}

exports.route = route;
