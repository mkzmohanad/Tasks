"use strict";
const hoursDiv = document.querySelector("#hours");
const minutesDiv = document.getElementById("mins");
const secsDiv = document.querySelector("#secs");
const miliDiv = document.querySelector("#miliSecs");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");


function stopWatch () {
    let startMill = "";
    let hours = 0;
    let mins = 0;
    let secs = 0;
    let miliSecs = 0;

    function timerMilliSec() {
        miliSecs++;
        if (miliSecs === 100 ) {
            secs++;
            miliSecs = 0;
        }
        else if (miliSecs < 10) {
            miliDiv.textContent = `0${secs}`;
        }
        else {
            miliDiv.textContent = miliSecs;
        }

        if (mins === 60) {
            hours++;
            mins = 1;
        }
        else if (mins < 10) {
            minutesDiv.textContent = `0${mins}`;
        }
        else {
            minutesDiv.textContent = mins;
        }

        if(secs === 60) {
            secs = 0;
            mins++;
            secsDiv.textContent =secs;
        }
        else if (secs < 10) {
            secsDiv.textContent = `0${secs}`;
        }
        else {
            secsDiv.textContent = secs;
        }

        if(hours < 10) {
            hoursDiv.textContent = `0${hours}`;
        }
        else {
            hoursDiv.textContent = hours;
        }
        
    }
    startBtn.addEventListener("click", function() {
        startMill = setInterval(timerMilliSec , 10);
    })
    stopBtn.addEventListener("click", function() {
        clearInterval(startMill);
    })
}
stopWatch();