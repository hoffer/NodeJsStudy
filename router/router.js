var url = require("url");

var testPromise = require("../controller/testPromise");

function route(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("About to route a request for " + pathname);
    if (pathname.startsWith("/testPromise")) {
        testPromise.TestPromise();
    }
}

exports.route = route;
