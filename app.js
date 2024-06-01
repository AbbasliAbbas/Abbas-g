//1
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//2
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //3 
  // program to check if the number is even or odd
// take input from the user
const number = prompt("bura reqem yaz :");

//check if the number is even
if(number % 2 == 0) {
    console.log("bu reqem cutdur.");
}

// if the number is odd
else {
    console.log("bu reqem tekdir.");
}

//4
// Function for number checking 
function NumberSignChecker(n) {
    if (n > 0) {
        console.log("Positive number");
    } else if (n < 0) {
        console.log("Negative number");
    } else {
        console.log("sifir");
    }
}

// Variables holding values
let number1 = -100;
let number2 = 66;
let number3 = 0;

NumberSignChecker(number1);
NumberSignChecker(number2); 
NumberSignChecker(number3); 

//5
function reverseString(str){
    const reversedString = 
    str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}
reverseString("Javascript");

//6
// create a new Date object
const now = new Date();

// get the current day of the week
const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const dayOfWeek = daysOfWeek[now.getDay()];

// get the current time
const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

// display the result
console.log(`${dayOfWeek} ${time}`);


//7
// JavaScript program for 
// simple mathematical calculations 

// Add two numbers 
function add(num1, num2) { 
	return num1 + num2; 
} 

// Function for subtraction 
function subtract(num1, num2) { 
	return num1 - num2; 
} 

// For multiplying of two numbers 
function multiply(num1, num2) { 
	return num1 * num2; 
} 

// Function for division of 
// two numbers 
function divide(num1, num2) { 
if(num2 === 0) return undefined; 
	return num1 / num2; 
} 

// Creating variables for 
// num1 and num2 
let num1 = 20; 
let num2 = 4; 

let operation = "/"; 

// Creating result variable 
let result; 

// If-Else conditions 
if (operation === "+") { 
	result = add(num1, num2); 
} else if (operation === "-") { 
	result = subtract(num1, num2); 
} else if (operation === "*") { 
	result = multiply(num1, num2); 
} else if (operation === "/") { 
	result = divide(num1, num2); 
} else { 
	result = "Invalid operation"; 
} 
// Printing the final result 
console.log("The Result of this operation is : " + result);


//8
function createCounter(n) {
    return function() {
      return n++;
    };
  }
  
  // Usage example:
  const counter = createCounter(5);
  
  console.log(counter());
  console.log(counter());
  console.log(counter());



