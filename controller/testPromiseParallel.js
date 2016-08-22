const util = require('util');

function GetDateNowString() {
    currentDate = Date(Date.now());
    return currentDate.toString();
}

function HandlingPromise(resolve, promiseId) {
    logText = util.format(GetDateNowString() + " Resolve Promise %d ...\n", promiseId);
    console.log(logText);
    resolve(logText);
}

function NewTestPromise(res, promiseId) {
    return new Promise(function (resolve, reject) {
        setTimeout(HandlingPromise, 3000, resolve, promiseId);
        logText = util.format(GetDateNowString() + " Execute Promise %d with 3000 ms delay...\n", promiseId);
        console.log(logText);
        res.write(logText);
    });
}

function TestPromise(res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    Promise.all([
        NewTestPromise(res, 1),
        NewTestPromise(res, 2),
    ]).then(values => {
        for (value in values) {
            res.write(values[value]);
        }
        logText = util.format(GetDateNowString() + " All Promise Fullfilled\n");
        console.log(logText);
        res.write(logText);
        res.end();
    }).catch(err => {
        logText = util.format(GetDateNowString() + " Some Promise Rejected: %s\n", err);
        console.log(logText);
        res.write(logText);
        res.end();
    });
}

exports.TestPromise = TestPromise;
