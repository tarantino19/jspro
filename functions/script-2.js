`use strict`;
//***FUNCTIONS INTRO***

// Block of code => performs a task

// console.log(`PRINT`); // this is a built in function

// FUNCTION DECLARATION (Defining a functions)
// function square(number) {
//   return number * number; // curly braces is the function body, all function needs a return
// } // this code WASNT EXECUTED yet

// // FUNCTION CALL (Executing a function/invoking the function)
// const result = square(5); // inside the parenthesis is the argument //then we assign it to a variable so we can store and see the result in a console.log
// console.log(result);

// ***FUNCTION DECLARATION***
// function name (parameters) {
//     // statements
// }  //function DEC has access to the "this" keywords

// ***FUNCTION EXPRESSION***
// defines a name or an anonymous function

// const theName = function (parameters) {
//     // statements
// }

// *** ARROW FUNCTION***  //more modern, use this.
// const theName = (parameters) => {
//   //  statements
// };

// *** EXAMPLE ***

// function sayHi(name) {
//   console.log(`Hi ${name}`); // this has no return statement, why?...next lesson
// }

// sayHi(`Joe`);
// sayHi(`Jane`);

// All function RETURNS undefined unless specified

// const add = (a, b) => {
//   return a + b; // return stop the function  immediately
// };

// const sum = add(2, 2);

// console.log(sum);

// ***EXAMPLE*** BOOLEAN

// const test = () => {
//   return true;
//   return false; //never executed
//   console.log(2);
// };

// const boolean = test();
// console.log(boolean); // return TRUE

// ***ARROW FUNCTIONS***
// they don't create their own "this" reserve keyword

// const square = (number) => {
//   return number * number;
// };

// const result = square(5);
// console.log(result);

//shorter version when there's only 1 return statement, ommit return statement and curly braces like this:
// const square = (number) =>  number * number;
// 1 parameter, we can remove the parenthesis in the paramter section
// personaly, i like to leave the parenthesis there

// *** PARAMETERS & ARGUMENTS *** //

// Parameters = when defining a function
// Arguments = pass when making func calls

// const sayHi = (firstName = `You`, age = `sorry, we don't know`) => {
//   console.log(`${firstName} is ${age} years old`); // parameters is the firstName
// }; // parameters are just names we're planning to pass in the func calls

// sayHi(`Joe`);

// DEFAULT PARAMETERS makes more sense when doing mathematical operations

// const add = (a, b = 0) => {
//   return a + b;
// };

// const result = add(2);
// console.log(result);

// *** JS = THE TRICKY PARTS***

//*** SCOPE***
// allows us to know where we have access to our variables so we can have security, helps us improve efficiency, track bugs, and naming variables

//***Global Scope***

// usually for storing constants
// const name = `John`; // this is in global scope

// const logName = () => {
//   console.log(name); // appearing on console log, it means we have access to it for the whole program.
// };

// logName();

// it will keep running

// ***Local Scope/Function Scope***

// You can give local variable same name in different functions caus etheyre only recognize by the function they are in

// const aFunction = () => {
//   // local scope #1
//   const name = `John`;
//   console.log(name); // inside the curly bracket is a function or local scope
// };
// aFunction();
//   console.log(name); // this doesnt show anything , we cannot use local variables outside of the scope they are declared in

//more efficient, faster code - but very limited scope as well
// You can give local variable same name in different functions caus etheyre only recognize by the function they are in.
// example:

// const theFunction = () => {
//   const theName = `Blue`;
//   console.log(theName);
// };

// const theFunction2 = () => {
//   const theName = `Gray`;
//   console.log(theName);
// };

// theFunction();
// theFunction2();

//***Block  Scope***

// if (true) {
//   const name = `John`;
// }

// console.log(name);

// it's in the block scope so it wont return anything.

//Avoud unwanted global varilables especially in a big program
// Try using local/block so we can find that varilable easily + its a,more efficient code in general

//***HOISTING***

// mostly in older js

// functions and variables are hoisted to the top of their scope

// variable gets to the top, but not the actual value

// console.log(age);
// var age = 20;

//example

// hoist(); //shows undefined

// function hoist() {
//   //   var message = `test`;  it will show test on log
//   console.log(message);

//   var message = `test`; //will get undefined
// }

// newer versions of JS are trying to get away with hoisting
// like this

// console.log(age);

// const age = 25;
//Uncaught ReferenceError: Cannot access 'age' before initialization

// ***CLOSURE***
// gives us access to the outer function scope from the inner function

// const init = () => {
//   const hobby = `Learning JavaScript`; // local variable created by init function

//   const displayHobby = () => {
//     // inner function or CLOSURE
//     console.log(hobby); // variable created in the parent function
//   };

//   displayHobby();
// };

// init();

//EXPLANATION by JS interpreter
// 1 - init function created a local variable called hobby and a function called displayHobby
// 2 - displayHobby is an inner function (and inly available in the local scope) but it can access the variable called hobby and can console log it
//

// more info on closures
// https://www.robinwieruch.de/javascript-closure/

//
// *** STRINGS***
// const single = "${2 + 2}"; // =string
// const double = "${2 + 2}"; // = string

// console.log(single);
// console.log(double);

// const backticks = `${2 + 2}`; // = number...  allows extended logic

// console.log(backticks);

// const sum = (a, b) => {
//   return a + b;
// };

// const total = `The sum is ${sum(2, 2)}`;
// console.log(total);

// const row example

// const row = `
// 1
// 2
// 3
// `;

// console.log(row); // this only works on backticks

// const greeting = `Hi I'm John, but they call me "Johny Blaze`; // backticks allows us to use single and double quoted strings

// console.log(greeting);

// *** STRING LENGTH AND BASIC PROPERTIES ***

// Length property + certain characters of the string

// const yourName = `John, oh mama spaghetti`;
// // console.log(yourName.length); // length of value

// // console.log(yourName[0]); // get the certain property start at 0, 1, 2, 3...

// const firstLetter = yourName[0];
// const lastLetter = yourName[yourName.length - 1]; // get the last letter much easier

// console.log(firstLetter, lastLetter);

// ***CHANGE STRING CASE ***

// Uppercase/ lower case

// const mixedCaseString = `Hello! How are you?`;

// // we have to put it into a new variable

// const lowerCaseString = mixedCaseString.toLowerCase(); // it create a new one (to lowercase is immutable)
// const upperCaseString = mixedCaseString.toUpperCase(); // upper casing

// console.log(mixedCaseString, lowerCaseString, upperCaseString);

// ***SEARCHING FOR A SUBSTRING ***

// indexOf();

// const hobbies = `I love HTML, CSS, and Javascript... heck yeah I love Javascript`;

// // ***indexOf ()***

// const firstIndex = hobbies.indexOf(`Javascript`);
// // console.log(index);
// // Returns the position of the first occurrence of a substring.

// // @param searchString — The substring to search for in the string

// // @param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.

// // last indexof

// const lastIndex = hobbies.lastIndexOf(`Javascript`);

// console.log(firstIndex, lastIndex); //22, 53

//***INCLUDES ***

//- returns a true or false if something is included in the string

// const hobbies = `I love HTML, CSS, and Javascript... heck yeah I love Javascript`;

// const includesJS = hobbies.includes(`Javascript`);
// console.log(includesJS); // true

// // ***starts with ()***

// console.log(hobbies.startsWith(`I love`)); // true

// // ***ends with ()***

// console.log(hobbies.endsWith(`I love`)); // false
// console.log(hobbies.endsWith("Javascript")); // true

// will most likely use includes whenever you need to know if strings are there

// *** SPLIT A STRING ***

// split

// const exampleString = `dog`;

// const letters = exampleString.split(``);

// console.log(letters); //results into an array D O G

// const exampleString2 = `The quick brown fox jumps over the lazy dog`;

// const spaceCharacters = exampleString2.split(` `); //add space inside the quotes/backticks

// console.log(spaceCharacters); // results into an array

// *** REVERSE, REPEAT, TRIM - a string ***

// ***REVERSE.SPLIT, JOIN***

// const exampleString = `test`; // tset (reverse)

// const splitString = exampleString.split(``); // split the string
// const reverseString = splitString.reverse().join();
// console.log(reverseString);

//my way too long (still correct)...here's the right way

// const exampleString2 = `tests`;

// const reversedString2 = exampleString2.split(``).reverse().join();
// console.log(reversedString2);

// ** WE CANNOT USE REVERSE ON A STRING, so we have to split to arrays, reverse, then join them.

// ***REPEAT***

// const dogSays = `arf `;

// console.log(dogSays.repeat(5));

// ***TRIM***
// for cleaning empty space for users typing emails, names etc.
// it wont be correct when ur sending email for confirmation email, login form, newsletters etc - wasted lead

// const email = `   abc123@gmail.com  `; // not equal to `abc123@gmail.com` without any space

// console.log(email);
// console.log(email.trim()); // string removes the empty spaces

// ***PRACTICE***

// const guestList = `Our guests are: emma, jacob, isabella, ethan`;

// // 1 - Get length of the string. Store it in avariable called length // 44
// const length = guestList.length;
// console.log(length); // 44

// // 2 - Uppercase the entire string and store result to uppercasedGuestList // all uppercase res ult

// const uppercasedGuestList = guestList.toUpperCase();
// console.log(uppercasedGuestList); // uppercase result

// // 3 - Check if ETHAN is on the uppercaseGuestList.
// // store the variable called isEthanOnTheList, data type must be a boolean = true

// const isEthanOnTheList = uppercasedGuestList.includes(`ETHAN`);
// console.log(isEthanOnTheList); // true, ethan is indeed on the list

// // 4 - create a substring only contains `EMMA, JACOB, ISABELLA, ETHAN`
// // store var to subStringGuests  // `EMMA, JACOB, ISABELLA, ETHAN`

// const subStringGuests = uppercasedGuestList.slice(16);
// console.log(subStringGuests);

// // const subStringGuests =
// //   uppercasedGuestList.split(` `).join().slice(); //me trying stuff

// // 5 - Out of the substring you created, createn an array of names of people on the list. Store variable called guests.
// // expected[`EMMA`,`JACOB`, `ISABELLA`, `ETHAN`];

// const guests = subStringGuests.split(",");
// console.log(guests); //['EMMA', ' JACOB', ' ISABELLA', ' ETHAN']

// *** ARRAYS INTRO ***
// +for loops
// for storing a list of data/collections
// arrays are objects
// array coutn starts with zero

// const months = ["January", "February", "March", "April"];

// // months[2] = `Not March`; // we can reassign the value of an array using square bracket syntax // cl Not March

// // months[4] = `May`; // this adds a property/value at the end

// // *** FOR LOOPS IN ACTION ***

// for (let i = 0; i < months.length; i++) {
//   // without i++ code will run forever aka till it crash the computer
//   console.log(months[i]);
// }

// console.log(months);
// console.log(months.length); // know the number of arrays you have

// *** we can have many elements ***
// const values = [
//   `Apple`, // string
//   { theName: `John` }, //object
//   true, // boolean
//   () => {
//     // function
//   },
// ];

// console.log(values);

// *** ARRAY METHODS ***
// name arrays with plural S/ES

const names = [`Jon`, `Bob`, `David`, `Mark`];

// // ***ARRAY PUSH*** - Adds a new element containing an entered value to the end of an array

// //can also be store in a variable
// names.push(`Dean`); // Adds Dean to the array
// console.log(names); //['Jon', 'Bob', 'David', 'Mark', 'Dean']
// // it also RETURNS the length of the array when element is pushed/
// // console.log(names.push()); // will log 5

// // ***ARRAY POP*** - Deletes the last element of an array
// // ex. to do list, remove last with pop , bane the value with new variable
// const removedValue = names.pop();
// console.log(names); // ['Jon', 'Bob', 'David', 'Mark']
// console.log(removedValue); // Dean

// // *** ARRAY SHIFT *** - Deletes the first element of the array

// names.shift();
// console.log(names); //['Bob', 'David', 'Mark']

// // *** ARRAY UNSHIFT***  - Adds a new value to the start of an array

// names.unshift(`Dean`);
// console.log(names); //['Dean', 'Bob', 'David', 'Mark']

// *** ARRAY SPLICE*** - It adds new values from any position of an array

// const names = [`Jon`, `Bob`, `David`, `Mark`]; (already declared above, posting this just for reference)

// names.splice(2, 0, `Jenny`, `Johnny`); // 012, 0 means nothing deleted, then jenny johnny added after 012 index /2 means before the 2nd index

// console.log(names); // ['Jon', 'Bob', 'Jenny', 'Johnny', 'David', 'Mark']

// *** ARRAY SLICE*** - copy certain parts of an array into newly created array

// adds element a new variable that adds all the element in the previous array

// const hateJon = [`Bob`, `David`, `Mark`]; // will work but what if too many variables? youll go crazy
// console.log(names);

// const hateJonMark = names.slice(1, 3); // I can use indexOf to know what length $ is it. // THIS SLICES BEFORE 1, NOT THE NUMBER 1 ARRAY

// // ARRAYS ARE ZERO BASED 1 means before 1
// console.log(hateJonMark);

// *** MORE ARRAY METHODS***

// *** ARRAY FOR EACH***
