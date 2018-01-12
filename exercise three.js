var answer = prompt("Would you like to print your name?");
var i = "!";
while (answer === "name") {
console.log("Hello. My name is " + answer);
}
if (answer === "no") {   
    console.log(" ");  
    }
var answer2 = prompt("Would you like to print this again?");
while (answer2 === "yes") {
console.log("Hello. My name is " + answer + i++)
}
if (play === "no") {   
    console.log(" ");  
    }
    