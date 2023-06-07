"use strict";
const name = document.getElementById("name");
const trueOrFalse = document.getElementById("true-false");
// first function :
function average(arr) {
    let total = 0;
    for(let nums in arr) {
        total+=arr[nums];
    }
    return total / arr.length;
}
console.log(average([10,20,30,40,50,60,70,80,90,100,110,120])); // output = 65
// #############################################################################################
// second function :
function triangle(base , height) {
    return `${0.5 * base * height} cm^2`; // cm^2 = cm square
}

console.log(triangle(5 , 3)); // output = 7.5 cm^2
// #############################################################################################
// third function :
function age(year) {
    return `your age in days is: ${year * 365} days`;
}

console.log(age(19)); // output = 6935
// #############################################################################################
// fourth function :
function sum(num1 , num2) {
    return num1 + num2;
}

console.log(sum(10 , 20)); // output = 30
// #############################################################################################
// fifth function :
function firstName(arrName) {
    return arrName[0];
}
console.log(firstName(["ali","mohanad","ahmed","sara","ezz","jo","malak","ashraf","alaa","kareem","zeyad","amr"])); //output = ali
// #############################################################################################
// sixth function :
function printName(userName) {
    name.innerHTML = userName;
}
printName("mkz-mohanad");
// #############################################################################################
// seventh function :
function toSeconds(hours) {
    return hours * 60 *60;
}
console.log(toSeconds(1)); // output = 3600
// #############################################################################################
// eighth function :
function arrSum (arr) {
    let total = 0;
    for(let nums in arr) {
        total+=arr[nums];
    }
    return total > 350 ? trueOrFalse.innerHTML = true : trueOrFalse.innerHTML = false;
}
console.log(arrSum([10,20,30,40])) // output = 100 so false