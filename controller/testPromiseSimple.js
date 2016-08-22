const util = require('util');

function NewTestPromise(res, testValue) {
    return new Promise(function (resolve, reject) {
        logText = util.format("Execute Promise with test value=%d\n", testValue);
        console.log(logText);
        res.write(logText);
        if (testValue === true) {
            console.log("Resolve Promise...");
            resolve("Resolve Promise...");
        }
        else {
            console.log("Reject Promise...");
            reject("Reject Promise...");
        }
    });
}

function TestPromise(res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    NewTestPromise(res, true).then(value => {
        console.log("Promise Fullfilled with value:" + value);
        res.write("Promise Fullfilled with value:" + value);
        res.end();
    }).catch(err => {
        console.log("Promise Rejected with err:" + err);
        res.write("Promise Rejected with err:" + err);
        res.end();
    });
}

exports.TestPromise = TestPromise;
