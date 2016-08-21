const util = require('util');

function NewTestPromise(res, testValue) {
    return new Promise(function (resolve, reject) {
        logText = util.format("Execute Promise with test value=%d\n", testValue);
        console.log(logText);
        res.write(logText);
        if (testValue === true) {
            console.log("Resolved");
            resolve("Resolved");
        }
        else {
            console.log("Rejected");
            reject("Rejected");
        }
    });
}

function TestPromise(res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    NewTestPromise(res, true).then(value => {
        console.log("Fullfilled with value:" + value);
        res.write("Fullfilled with value:" + value);
        res.end();
    }).catch(err => {
        console.log("Rejected with err:" + err);
        res.write("Rejected with err:" + err);
        res.end();
    });
}

exports.TestPromise = TestPromise;
