"use strict";
const input = document.getElementById("input");
const info = document.querySelector(".info");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");

// start first part


// function checkInput () {
//     const inputText = input.value;
//     console.log(typeof inputText);
//     if (input.value === "") {
//         info.textContent = "not a number";
//     }
//     else if (isNaN(inputText)) {
//         info.textContent = "not a number";
//     }
//     else {
//         info.textContent = "is a number";
//     }
// }
// setInterval(checkInput,1000);
//######################################################################################################################
//start second part

// function greaterThan(num1 , num2) {
//     return num1 > num2? `${num1} greater than ${num2}` : num2 > num1 ? `${num2} greater than ${num1}` : `${num1} equals ${num2}`;
// }
// console.log(greaterThan(5,5));
//######################################################################################################################
//start third part

// function evenNums (list) {
//     for(let nums in list) {
//         if (list[nums] %2 === 0) {
//             console.log(list[nums]);
//         }
//     }
// }
// evenNums([1,2,3,4,5,6,7,8,9]);
//######################################################################################################################
//start fourth part

// function currentDate() {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const day = date.getDay();
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     info2.textContent = `current year : ${year} current month : ${months[month]} current day : ${days[day]}`
// }
// currentDate();
//######################################################################################################################
//start fifth part 

// function currentDate() {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const day = date.getDate();

//     info2.textContent = `${year}/${month+1}/${day}`;
// }
// currentDate();