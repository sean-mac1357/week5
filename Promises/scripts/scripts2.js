'use strict';

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function stopwatch() {
    return new Promise(function(resolve, reject) {
        const maxTime = 5;
        console.log("Max time is;", maxTime);
        let time = 0;
        let interval = setInterval() => {
            time++;
            if (time > maxTime) {
                resolve(time);
                clearInterval(interval)
            }
        }, 1000);
    });
}

stopwatch().then(function (time) {
    console.log('Time is up! ' + )
})