
const fs = require('fs');

function NewTestPromise(testValue) {
    return new Promise(function (resolve, reject) {
        console.log("Execute Promise...");
        if (testValue == true) {
            resolve("Yes");
        }
        else {
            reject("No");
        }
    });
}

function TestPromise() {
    NewTestPromise(false).then(value => {
        console.log("Fullfilled with value" + value);
    }).catch(err => {
        console.log("Rejected with err" + err);
    });

    NewTestPromise(true).then(value => {
        console.log("Fullfilled with value " + value);
    }).catch(err => {
        console.log("Rejected with err " + err);
    });
}

exports.TestPromise = TestPromise;
