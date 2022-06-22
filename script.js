`use strict`;

// ***STRING***
// const singleQuotes = "Hi";
// const doubleQuotes = "No difference";
// const backticks = `Hehe`;
// console.log(singleQuotes, doubleQuotes, backticks);

// const theName = `Red`;
// console.log(theName);
// console.log(`${singleQuotes} ${theName}`);

// const add = 2 + 2;
// console.log(add);

// const addButString = `2 + 2`;
// console.log(addButString);

// console.log(typeof addButString);
// console.log(theName.length);
// console.log(typeof theName);

// ***NUMBERS***

// const firstNumber = 5;
// const SecondNumber = 10;

// const result = firstNumber + SecondNumber;

// console.log(result);

// // string/number = NaN - which is technicallt still a number so typeof x is still a number

// // ***BOOLEANS - for adding logic***
// // true or false . yes or no, 1 or 0 sometimes

// const isCool = true;

// console.log(isCool);

// if (isCool) {
//   console.log(`Bruh, you're cool!`);
// } else {
//   console.log(`Nahh mate`);
// }

// // also come from comparison ...
// // use IS IT LARGER THAN X
// const age = 20;
// console.log(age < 20);

// // ***NULL***
// - assignment of no value
// // contains only null

// let theAge = null; //typeof null is a BUG in javascript even before js was invented

// theAge = 20;

// console.log(theAge); // value empty or unknown value  /then reassign, now value not empty

// // ***UNDEFINED***

// let x; //undefined

// console.log(typeof x);

// ***OBJECT TYPE*** - store collections of data, use for grouping variables
// object CURLY BRACES

// let person = {
//   theName: `Red`,
//   age: 29,
// };

// // ***DOT NOTATION***
// console.log(`${person.theName} is ${person.age} years old`);

// //***ARRAY*** .. use square braces
// const arr = [1, 2, 3, 4];
// console.log(arr); //typeof object

// const date = new Date();

// console.log(date); //typeof object

// ***STATISCALLY TYP***E - each variable is already know once compiled C C++, and JAVA

// ***DYNAMICALLY TYPED*** - JS...variable can be a string, then a number

// let msg = `Hello, World!`;
// console.log(typeof msg);

// msg = 8;
// console.log(msg);
// console.log(typeof msg);

// ***OPERATORS***

// ***ARITHMETIC OPERATORS***

// const a = 13;
// const b = 12;
// let result = 0;

// Addition
// result = a + b;

// Subtraction
// result = a - b;

//Multiplication
// result = a * b;

// Division
// result = a / b;

//Exponent
// result = b ** a;

// Modulo
// 13 & 12 === 1 (1)
// 1/12 === 0 (1)
// result = a % b;
// when you divide 13 by 12, the remainder is 1

// const a = 15;
// const b = 11;
// let result = 0; // or null

// Modulo
// 15/11 = 1 (4)
// 4/11 = 0 (4)

// result = a % b;

//***INCREMENT DECREMENT OPERATORS***
// result++; // one more than it currently is.
// result--; // one less than it currently is.

// console.log(result);

// ***COMPARISON OPERATORS***...      " > < ="
// returns boolean valuues of true or false - that's it.

// const a = 5;
// const b = 10;

// Greater than
// console.log(a > b);

// // greater than or equal to
// console.log(a >= b);

// less than
// console.log(a < b);

// less than or equal to
// console.log(a <= b);

// equality operator     IS EQUAL TO
// one equal sign to assign . two or 3 equal to equal

// const a = 10;
// const b = 10;

// // Is equal  ...STRIC EQUALITY 3 === or STRICT  INEQUALITY 3 !==
// console.log(a === b);

// // NOT equal ... UNSTRICT INEQUALTY
// console.log(a != b);

// ***STRICT AND LOOSE EQUALITY OPERATORS***
//strict
// console.log(5 === 5);
// console.log("Hello" === "Hello");

// //loose
// console.log(5 == "5"); //true cause loose
// console.log(5 === "5"); //false cause strict

// ***strict is preferred to use***
// Compares VALUES and DATA TYPES
// returns true only if both are the same

// console.log(20 === `20`); // number and string
// console.log(20 == `20`); // loose equality

//loose doesnt compare data types
// let number = 20;
// let string = "20";

// let total = number + string;

// console.log(total);
// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof total);

// The good ones === !== , will produce the way you expect
// The evil ones == != , do the right thing when only same type, they change values

// console.log("" == "0"); // false
// console.log(0 == ""); //true
// console.log(0 == "0"); //true

// console.log(false == "false"); // false
// console.log(false == "0"); // true
// evil twins could cause errors like this, supah weird.
//

// console.log(true == 1); //true
// console.log("5" == 5); //true

// console.log(true === 1); //false
// console.log("5" === 5); //false

//better practice to use STRICT EQUALITY

//

// ***LOGICAL OPERATORS***

// ***AND &&*** => ALL OPERANDS ARE TRUE = TRUE
// console.log(true && false && true); // false

// // ***OR***  ||  =>  AT LEAST ONE OPERAND IS TRUE = TRUE
// console.log(true || false); //true
// console.log(true || true); //true
// console.log(false || false); // false

// ***NOT  is ! *** -converts true to false, false to true

// console.log(!true); //false

// //*** ASSIGNMENT OPERATORS***
// let number = 5;
// number += 5; // number = number +5;
// number -= 5;
// number *= 5;
// number /= 5;

// console.log(number);

// let string = `Hello`;

// string += `, I am John!`;

// console.log(string);

// ***LOGIC AND FLOW ***- conditionals
// If else statement

// if (condition) {
//     block of code
// }

// const age = 18;

// if (age > 18) {
//   console.log(`You may enter`);
// } else if (age === 18) {
//   console.log(`You just turned 18, welcome!`);
// } else {
//   console.log(`Wait to grow up`);
// }

// ***TRUTHY FALSY VALUES***

// if () {
//   console.log(`IN HERE`);
// } else {
//   console.log(`NO, IN HERE`);
// }

// FALSY VALUES - 6 falsy values below everything else is truthy = boolean FALSE, but be careful with comparison operators - this may not apply
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

//application

// const dogs = 5;

// if (dogs) {
//   console.log(`You have ${dogs} dogs`);
// } else {
//   console.log(`You have no dogs`);
// }

// ***LOGICAL OPERATORS*** - 2 or more conditions, for is else statement

// Example: Women only gym that are 18 above

// const age = 15;
// const women = true;

// if (age >= 18 && women) {
//   console.log(`You may enter`);
// } else if (age < 18 && !women) {
//   console.log(`Women only gyms and 18 and above years old!`);
// } else if (age >= 18 && !women) {
//   console.log(`Right age, wrong gender!`);
// } else {
//   console.log(`You're a women but you need to grow up first`);
// }

// *** AND OPERATOR ***

// const age = 19;
// const isCool = true;

// is cool and is above age of 18
// if (age > 18 && isCool) {
//   console.log(`You may enter`);
// } else {
//   console.log(`  You cannot enter`);
// }

// console.log(age > 18 && isCool);

// console.log("truthy" && 1 && "NaN" && `999`); //999
// if all operands are true, it will return the last value
// all are truthy except the last one
// if for example "truthy" , 1, then NaN it will return the falsy value NaN (note that "NaN" is differe than NaN) "NaN" is a string and isn truthy

// console.log("truthy" && 0 && "test" && 999);
// it will return the FALSE value till it finds the false boolean value = truthy is true, 0 is false. it will return "0"

// OR OPERATOR

// console.log("truthy" || 1 || "test" || 999);
// // we get a string of truthy
// // from left to right, it doesn check the other values if the first one is already a TRUE boolean value

// console.log("truthy" || 0 || "test" || 999);
// // still a truthy

// console.log("" || 0 || null || undefined);
// // all falsy
// // last FALSY value is return

// // NOT OPERATOR !  accepts a single argument
// console.log(!true); // false

// console.log(!`truthy`); // it tries to convert it to boolean then the the not operator applies the opposite // false

// console.log(!""); // true
// console.log(!0); // true

// console.log(!!0); // just gives the original boolean value of the value

// const value = "test";

// if (!!value) {
//   // double !! just brings the value to the original boolean value
//   console.log(`value is Truthy`);
// } else {
//   console.log(`value is Falsy`);
// }

//***SWITCH STATEMENT***
// can be use interchangeably with if else
// larger number of statement = use switch
// takes in a value and checks in a bunch of cases
// switch, more than 4 or so variables

// const superHero = "Superman";

// switch (superHero) {
//   case `Iron Man`:
//     console.log(`I am Ironman!`);
//     break;
//   case `Thor`:
//     console.log(`That is my hammer!`);
//     break;
//   case "Captain America":
//     console.log(`I can do this all day!`);
//     break;
//   case `Black Widow`:
//     console.log(`Were still friends right?`);
//     break;
//   case `Superman`:
//     console.log(`Enter a non-DC superhero!`);
//     break;
//   default:
//     console.log(`Enter a different MCU superhero!`);
//     break;
// }

//***TERNARY OPERATOR***
// use for simple true or false check

// condition ? // block of code if true : block of code if false
// condition ? true : false

// const age = 18;

// if (age >= 18) {
//   console.log(`You can drive`);
// } else {
//   console.log(`You cannot drive yet`);
// }

// //ternary great for 2 things to compare 1 is correct, another incorrect

// age >= 18 ? console.log(`You can drive`) : console.log(`You cannot drive yet`);
// // is blank (first line)..  true? (1st one runs) ...false (second one runs)

//***LOOPING WHILE AND FOR LOOPS*** // for repetitive codes

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//the "while" loop - it runs till x amount of time

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++; // without i++ it will be infinite loops, which will also destroy computer program, we never want to get infinite loops
// }

// the "for" loop
// it runs FOR a specific number of times

//1st part is initialization, 2nd check if its true, 3rd remove the infinite loop  // for (;;) is an infinite loop, don't do thi sheesh.
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// same result as the while loop
// when I find myself seeing repetitive codes with only 1 or 2 variable changing, then I can use the WHILE or FOR loops
//***DRY - Don't write DRY code. Don't Repeat Yourself.***

// ***the FOR LOOP***

// for (begin; condition; step) {
//     // ... loop body ...
//   }

// for (let i = 0; i < 3; i++) {
//   // shows 0, then 1, then 2
//   alert(i);
// } // this code show alert from o to 3

// ***what actually happens in the code above***

// // for (let i = 0; i < 3; i++) alert(i)

// // run begin
// let i = 0
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // ...finish, because now i == 3
