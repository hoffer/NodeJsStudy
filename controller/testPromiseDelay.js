const util = require('util');

function GetDateNowString() {
    currentDate = Date(Date.now());
    return currentDate.toString();
}

function handlingPromise(resolve) {
    logText = util.format(GetDateNowString() + " Resolve Promise...\n");
    console.log(logText);
    resolve(logText);
}

function NewTestPromise(res, testValue) {
    return new Promise(function (resolve, reject) {
        setTimeout(handlingPromise, 3000, resolve);
        logText = util.format(GetDateNowString()+" Execute Promise with 3000 ms delay...\n");
        console.log(logText);
        res.write(logText);
    });
}

function TestPromise(res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    NewTestPromise(res, true).then(value => {
        res.write(value);
        logText = util.format(GetDateNowString() + " Promise Fullfilled." );
        console.log(logText);
        res.write(logText);
        res.end();
    }).catch(err => {
        logText = util.format(GetDateNowString() + " Promise Rejected.");
        console.log(logText);
        res.write(logText);
        res.end();
    });
}

exports.TestPromise = TestPromise;
