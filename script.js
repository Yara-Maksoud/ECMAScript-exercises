// /Exercise 1

let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);
console.log(user);


//Exercise 2
//1. Create the variable with the name of our planet. How would you name such a variable?
let planetName = 'earth';
// Create the variable to store the name of the current visitor. How would you name that variable?
let currentVisitorName;

//Exercise 3
//What will be the result of the call at the last line and why?
let phrase = "Hello"

if (true) {
    let user = "John";
    function sayHi() {
        //alert(`${phrase}, ${user}`);
    }
}

sayHi()
//The result will be Hello, John 
//because both the user and phrase variable are accessible because of the function's lexical scope 

// Exercise 4
// Create an empty object user.
let user1 = {};
// Add the property name with the value John.
user1.name = 'John';
// Add the property surname with the value Smith.
user1.surname = 'Smith';
// Change the value of the name to Pete.
user1.name = 'Pete';
// Remove the property name from the object.
delete user1.name;

console.log(user1);

//Exercise 5
// Is it possible to change an object declared with const, how do you think and why?

const user2 = {
    name: "John"
}

// does it work?
user2.name = "Pete"
//Yes it works because the object itself it's constant not the value of its properties
//so we cannot assign the user object to a new object but we can edit its properties


//Exercise 6
//Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
let sum = 0;

//First solution to get the values of the object as array then iterate through it and calculate the sum
let allSalaries = Object.values(salaries);
for (let i = 0; i < allSalaries.length; i++) {
    sum += allSalaries[i];
}

//the second solution using for...in loop to iterate through the object     
// for(let i in salaries){        
//       sum += salaries[i]
//   }

console.log(sum);

//Exercise 7
//Rewrite this if using the ternary operator '?':
let a = 1
let b = 2

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

console.log(result);

//ternary operator 
result = (a + b < 4) ? 'Below' : 'Over';

console.log(result);


// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.

let message;
let login = ' '

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '' ;

console.log(message);



