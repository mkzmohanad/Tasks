"use strict";
const hoursDiv = document.querySelector("#hours");
const minutesDiv = document.getElementById("mins");
const secsDiv = document.querySelector("#secs");
const amOrPm = document.querySelector("#nightOrMorning");

function timer () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log("hi")
    function timerHours() {
        hours >= 12 ? amOrPm.textContent = "PM" : amOrPm.textContent = "AM";
        const editedHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        return editedHours < 10 ?  hoursDiv.textContent = `0${editedHours}` : hoursDiv.textContent = editedHours;   
    }
    timerHours();
    function timerMinutes() {
        return minutes < 10 ?  minutesDiv.textContent = `0${minutes}` : minutesDiv.textContent = minutes;   
    }
    timerMinutes();
    function timerSeconds() {
        return seconds < 10 ?  secsDiv.textContent = `0${seconds}` :secsDiv.textContent = seconds;   
    }
    timerSeconds();
}
setInterval(timer, 1000);
// timer();