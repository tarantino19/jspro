`use strict`;
//dom, tree of nested html

// find an element by ID - easiest most efficient
// 1 - const el = document.getElementById
// 2 - document.getElementById
// 3 - by class name  // document.querySelectorAll (`h2.test`) // all .querySelectorAll
//inside the console

// elements, properties, and methods
// type property only works for button and input only
// CLASS LIST

// CLASSES NEW THIS

// NEW keywords creates a new object OR array

// const person = {}; // object
// const person1 = new Object(); // new object

// person.firstName = `John`;
// person1.firstName = `John`;

// console.log(person, person1);
// console.log(typeof person, typeof person1); // both object

// so whats the point?
// NEW object allows us to make object constructors

//array example

// const arr = [1, 2, 3];
// const arr1 = new Array(1, 2, 3);

// console.log(arr, arr1);

// when to use new object?/array?
// *** ANSWER ... when dealing with DATES *** as in petsa

// const myDate = new Date(`August 11, 2025`); // we need to use new for it to show date when logged

// console.log(myDate); // Mon Aug 11 2025 00:00:00 GMT+0800 (Philippine Standard Time)

// console.log(myDate.getFullYear()); // 2025 // other get methods also available

// different data types

// these are fall functions that returns an object

// console.log(Array); //  Array() { [native code] }
// console.log(Object); //  Object() { [native code] }
// console.log(Number); // Number() { [native code] }
// console.log(Date); // Date() { [native code] }

// const arr = [1, 2, 3, 4]; // literal syntax
// arr.push(5);
// console.log(5); // dates are mostly for the NEW keyword

// *** the THIS keyword ***

// for refering an object executing a function
// MUST NOT BE AN ARROW FUNCTION

// EXAMPLE 1

// function Sentence(words) {
//   this.words = words;

//   console.log(this); // Sentence {words: 'Hello this is a sentence'}
// }

// const firstString = new Sentence(`Hello this is a sentence`);

// // EXAMPLE 2

// console.log(this); // global window object

// // EXAMPLE 3

// const person = {
//   name: `John`,
//   getName() {
//     console.log(this); // person -> John
//   },
// };

// person.getName();

// // EXAMPLE 4

// const Car = function (color, brand, wheels) {
//   this.color = color;
//   this.brand = brand;
//   this.wheels = wheels;

//   console.log(this);
//   // Car {color: 'blue', brand: 'BMW', wheels: 4}
//   //Car {color: 'red', brand: 'BMW', wheels: 4}
// };

// const blueCar = new Car(`blue`, `BMW`, 4); //
// const redCar = new Car(`red`, `BMW`, 4);
// this shows the cl function TWICE in the same scope
// no need to cl twice

// JS is turning into more and more functional programming instead of object oriented programming

// *** CLASSES ***
// A schema for an object that can save many values

// class Person {
//   constructor(name, age, isWorking) {
//     this.name = name;
//     this.age = age;
//     this.isWorking = isWorking;
//   }
// }

// const user = new Person(`Melissa`, 24, true);

// console.log(user);

// use this schema for to many variables with the same properties
// what if using normal arrow function? BELOW

// const createPerson = (name, age, isWorking) => {
//   const userSchema = {
//     name,
//     age,
//     isWorking,
//   };

//   return userSchema;
// };

// // or const createPerson = (name, age, isWorking) => ({ name, age, isWorking  })

// const user = createPerson(`Melissa`, 24, true);
// const user2 = createPerson(`Red`, 24, true);
// const user3 = createPerson(`Gray`, 24, true);

// console.log(user); //{name: 'Melissa', age: 24, isWorking: true}
// console.log(user2); //{name: 'Red', age: 24, isWorking: true}
// console.log(user3); //{name: 'Gray', age: 24, isWorking: true}

// *** ASYNC JAVASCRIPT - INTERVALS AND TIMERS ***

// async code - doesnt run on a linear

// setInterval
// const myInterval = setInterval(() => {
//   console.log(`Hello, World!`); // counts 1 hello world every 1000 ms
// }, 1000);

// clearInterval(myInterval); // clears hello world immediately after 1 sec

// setTimeout
// allows a block of code to run after a set amount of time indicated

// const myInterval = setTimeout(() => console.log(`Hello, World!`), 5000); // Hello world after every 5 seconds

// clearTimeout(myInterval); // clears hello world immediately after myInterval runs

// async vs sync example

// setTimeout(() => console.log(`This will come up below Hello, World!`), 5000);

// console.log(`Hello, World!`);

//Hello, World!
// script.js:166 This will come up below Hello, World!

// *** SYNC VS ASYNC ***

// synchronous - code is executed line by line
// i.e there's not time delay in completion of tasks for those line of code

// SYNC CODE EXAMPLE

// const functionOne = () => {
//   console.log(`Function One`);

//   functionTwo();

//   console.log(`Function One, Part 2`);
// };

// const functionTwo = () => {
//   console.log(`Function Two`);
// };

// functionOne();

// 1 Function One
// 2 Function Two - because we call the fucntionTwo (thats why this appear 2nd)
// 3 Function One, Part 2

// *** ASYNC CODE ***
// some lins take time to run, js keeps running and finding other ones to execute first, then it goes back to the async code when its ready to execute.

// ASYNC CODE EXAMPLE (same as above except const fucntionTwo)

// const functionOne = () => {
//   console.log(`Function One`);

//   functionTwo();

//   console.log(`Function One, Part 2`);
// };

// const functionTwo = () => {
//   setTimeout(() => console.log(`Function Two`), 2000);
// };

// functionOne();

// Function One
// Function One, Part 2
// Function Two - this appears last cause of 2 sec delay

// *** CALLBACKS ***

// API -Application Programming Interface

// Data Fetching

// const fetchUser = (username, callback) => {
//   setTimeout(() => {
//     callback({ username });
//   }, 2000);
// };

// fetchUser(`Michael`, (user) => {
//   console.log(`Your name is: ${user.username}`); // not undefined anymore .. Your name is: Michael (but appeared after 2 seconds)
// }); // callback because it calls back after an action is done, in this case after the user is fetched.

// undefined
// it waited 2 seconds so we got error...
// here comes to concept of callback function

// *** CALLBACK HELL ***

// const fetchUser = (username, callback) => {
//   setTimeout(() => {
//     callback({ username });
//   }, 2000);
// };

// const fetchUserPhotos = (username, callback) => {
//   setTimeout(() => {
//     callback([`Photo 1`, `Photo 2`]);
//   }, 2000);
// };

// const fetchPhotoDetails = (username, callback) => {
//   setTimeout(() => {
//     callback([`Details...`]);
//   }, 2000);
// };

// // THE INFAMOUS CALLBACK HELL - bad practice to follow so
// // we use PROMISES intead ***

// fetchUser(`Michael`, (user) => {
//   console.log(`Your name is: ${user.username}`);

//   fetchUserPhotos(user.username, (userPhotos) => {
//     console.log(`Your photos are ${userPhotos}`);

//     fetchPhotoDetails(userPhotos[0], (details) => {
//       console.log(`Your photo details are: ${details}`);
//     });
//   });
// });

// Your name is: Michael
// Your photos are Photo 1,Photo 2
// Your photo details are: Details...

// I honestly have no idea what's going on here
// rewatch this section

// *** PROMISES ***

// Promises are objects that either return the successfully fetched data, or the error
// rewatch this section

// ASYNC => AWAIT

// addition to promises

// async functions return promises

// const fetchNumber = async () => {
//   return 25;
// };

// fetchNumber()
// .then((number) => console.log(number));

// ASYNC => AWAIT ... no more callbacks, then...
// looks and behave like a synchronous code
// const fetchNumber = async () => {
//   return 25;
// };

// const consoleFetchedNumber = async () => {
//   const number = await fetchNumber();

//   console.log(number);
// };

// consoleFetchedNumber();

// rewatch the async await section

// *** MODERN JAVASCRIPT *** ES6

// const let, arrow functions, default parameters, template strings

// IMPORT EXPORTS - for larger codes - multiple files

// on html  <script type = "module" src = script.js</script>

// 1 - export default variable; - 1 exported  ... export const for multiple
// 2 - import {dogs, numberOfDogs}  from `./dogs.js`

// *** SPREAD & REST OPERATOR ***

// *** REST OPERATOR ***

// const add = (...args) => {
//   // rest operator
//   return args.reduce((acc, val) => acc + val);
// };

// console.log(add(2, 2, 2, 2, 2, 2));

// *** SPREAD OPERATOR or SYNTAX ***

// const numbers = [1, 2, 3, 4, 5];

// // numbers.push(6); // not optimal to mutate

// const newNumbers = [...numbers, 6];

// console.log(numbers); //  [1, 2, 3, 4, 5]
// console.log(newNumbers); // [1, 2, 3, 4, 5, 6]
// stored on a new varilable so numbers didnt mutate

// *** OBJECT AND ARRAY DESTRUCTURING ***

// Object Destructuring

// const person = {
//   firstName: `Gary`,
//   lastName: `Vee`,
//   car: {
//     color: `red`,
//     wheels: 4,
//   },
//   animals: {
//     dog: {
//       name: `Flufyy`,
//       age: 3,
//     },
//     cat: {
//       name: `Kitty`,
//       age: 3,
//     },
//   },
// };

// //isa isa i log
// // DRY code

// const {
//   firstName,
//   lastName,
//   car: { color, wheels },
//   animals: { dog, cat },
// } = person;

// console.log(firstName); // Gary
// console.log(lastName); // Vee
// console.log(dog.name);
// console.log(cat.name);

// // Node

// const test = (req, res) => {
//   const { body, params } = req;
// };

// // React

// const Component = ({ keys }) => {};

// *** ARRAY DESTRUCTURING - example ***

// const introduction = [`Hello`, `I`, `am`, `Sarah`];

// //usual cl to destructure
// // const greeting = introduction[0];
// // const name = introduction[3];

// const [greeting, , , name] = introduction;

// console.log(greeting, name); // Hello Sarah
// but I can easily as just do these:
// const greeting = introduction[0];
// const name = introduction[3];
