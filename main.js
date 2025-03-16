const readline = require('readline-sync');
let jsUserName = (readline.question("Please enter your name: "));
console.log("Hello " + jsUserName + "!");

let jsUserQuestion =(readline.question("Please enter the index number for the first letter of your name: "));
console.log(jsUserQuestion);

// let firstInitial = [0];
// let outputStr = "The index of your fist inital is " + firstInitial + ".";
// console.log(outputStr);

let firstInitial = 0;

if (firstInitial === 0) {
    console.log("You are not correct!");
} else {
    console.log("You are correct!");
}