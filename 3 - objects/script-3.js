`use strict`;

//*** OBJECTS***

// Can be compared to a physical object with properties of its own
// unorder collection of related data in form of key and value pairs
// ***note, arrays on the other hand is multiple daya in the same variable.

// *** EXAMPLE 1***

// const person = {
//   firstName: `Tom`, // we can also create variable above called firstName = `Jon` , then put firstName here. person.FirstName would be `Jon` in that case
//   lastName: `Cruise`,
//   age: 40,
//   car: {
//     brand: `Toyota`,
//     year: 2015,
//     color: `red`,
//   },
// };

// console.log(person); //every object inside

//*** ACCESSING , ADDING, AND UPDATING PROPERTIES OF OBJECTS***

// DOT NOTATION

// const person = {
//   firstName: `Brad`,
// };

// person.dog = { name: `Fluffy`, age: 2 }; // adds a dog property inside person variable
// person.age = 25;

// console.log(person.dog.name); // Fluffy ...for accessing deeper properties.
// console.log(person);

// // SQUARE BRACKET NOTATION

// console.log(person[`firstName`]); // Brad // cl person.firstName

// ***SB EXAMPLE CASE***
// dont know yet what user want to access
// user choose toggle and property he wants

// const person = {
//   firstName: `Brad`,
//   age: 25,
// //   "this-is-a-key": true, // will work on brcket notation, not on dot notation - this not good practice not use a lot
// };

// const property = `age`;

// console.log(person[property]); // 25 // wont work if person.property
// console.log(person[`this-is-a-key`]); //true
// // console.log(person."this-is-a-key"); // unexpected string error

// *** ***BUILT IN METHODS *** ***

// another property of an object that is a function

// *** built in method EXAMPLE ***
// const dog = {
//   name: `Fluffy`,
//   age: 2,
//   bark: () => {
//     console.log(`arf arf!`);
//   },
// };

// dog.bark(); //call it so it will execute

// *** EXAMPLE 2*** Calling all properties of dog
// const dog = {
//   name: `Fluffy`,
//   age: 2,
//   listAllProperties: function () {
//     //cannot use arrow on THIS keyword
//     console.log(this.name, this.age);
//   },
// };

// dog.listAllProperties(); //Fluffy 2

// *** *********BUILT IN METHODS SAMPLES************
// statis object methods

// ***Object.keys ()***

// const employees = {
//   boss: `Michael`,
//   secretary: `Pam`,
//   sales: `Jim`,
//   accountant: `Oscar`,
// };

// const positions = Object.keys(employees);

// console.log(positions); // shows the properties/keys, not the value
// 0: "boss"
// 1: "secretary"
// 2: "sales"
// 3: "accountant"
// length: 4
// [[Prototype]]: Array(0)

// ***Object.values()***

// const session = {
//   id: 1,
//   time: `26-July-2018`,
//   device: `mobile`,
//   browser: `Chrome`,
// };

// const sessionInfo = Object.values(session);
// console.log(sessionInfo); // shows arrray of [1, '26-July-2018', 'mobile', 'Chrome']

// ***Object.entries*** - key/value pairs

// const operatingSystem = {
//   name: `ubuntu`,
//   version: 18.04,
//   license: `Open Source`,
// };

// const entries = Object.entries(operatingSystem);
// console.log(entries); // shows the pair of operatingSystem

// //*** Loop through the results***

// entries.forEach((entry) => {
//   let key = entry[0];
//   let value = entry[1];

//   console.log(`${key} : ${value}`);
// });

// shows the actual value pairs
// name : ubuntu
//  version : 18.04
//  license : Open Source

// *** Object.freeze ***

// prevents modification, and prevents properties from being added or removed from an object

// const user = {
//   username: `John`,
//   password: `123123`,
// };

// const admin = Object.freeze(user);

// admin.username = `test`; // username change wont work
// admin.password = `654321`; // password change wont work

// console.log(admin); // {username: 'John', password: '123123'}

// *** Object.seal ()***

// prevents new properties from being added to an object but allows modification of existing properties

// const user = {
//   username: `John`,
//   password: `123123`,
// };

// const newUser = Object.seal(user);

// newUser.password = `test123`; // password change to test123
// newUser.age = 19; // this wont be added cause of object seal method

// console.log(newUser);

// array methods are more commonly use so be great at this, be at least good with this, know this object methods

//*** VALUE VS REFERENCE***

// learn this to avoid bugs an errors

// Data Types
// - Primitive Values (number, string, boolean..)
// - Complex Values (Objects, Arrays (which is an object))

// let firstPerson = `Mark`;
// let secondPerson = firstPerson;

// firstPerson = `Austin`;

// console.log(firstPerson); // Austin
// console.log(secondPerson); // Mark

// Complex Value

// const animals = [`dogs`, `cats`]; // [`dogs`, `cats`];
// const otherAnimals = animals; // [`dogs`, `cats`];

// animals.push(`llamas`); //

// console.log(animals); // ['dogs', 'cats', 'llamas']
// console.log(otherAnimals); // ['dogs', 'cats', 'llamas'] - llamas are added because animals still points the value to llamas

// object sample

// const person = {
//         firstName = `Jon`
//         lastName = `Snow`
// };

// const otherPerson = person; // person & other person points to the same location in the memory - a "reference"
// //we're not making a copy, we're just pointing.

// person.firstName = `Johnny`;

// console.log(person); // Johnny Snow
// console.log(otherPerson); //  Johnny Snow

// when a variable is assigned a primitive value, it just copies that value. That's why it's still Johnny Snow
// If it's an object/array/function it is given a referebce to that objects location in memory.

//sample 2

// const person = { name: `Jon` };
// const otherPerson = { name: `Jon` };

// console.log(person === otherPerson); // false
// because they point to 2 distinct OBJECT {} in js memory

// sample 3
// const person = { name: `Jon` }; //123asd
// const otherPerson = person; //123asd

// console.log(person === otherPerson); // true. why?
//referencing the same value

// *** SHALLOW CLONING ***

// create a completely new copy of an object/array/function

// ***CLONING ARRAYS***

// *** 1st way: Spread Operator DOT DOT DOT ( ...)

// const numbers = [1, 2, 3, 4, 5];
// const copiedNumbers = numbers; //same as above (but just directed version)
// const newNumbers = [...numbers]; // created a NEW array (not directed) - a SHALLOW CLONE - *** spread operator method ***

// numbers.push(6); //makes numbers and copied numbers 1-6 but doesnt affect the newNumbers

// console.log(numbers); //[1, 2, 3, 4, 5, 6]
// console.log(copiedNumbers); //[1, 2, 3, 4, 5, 6]
// console.log(newNumbers); // [1, 2, 3, 4, 5]

// console.log(numbers === copiedNumbers); // true
// console.log(newNumbers === numbers); // false (cause newNumbers was created via Spread Operator)

// *** 2nd way: Arrray Slice // copies entire array and then puts it in a new variable

// SAME AS ABOVE, SLICE is the only change

// const numbers = [1, 2, 3, 4, 5];
// const copiedNumbers = numbers; //same as above (but just directed version)
// const newNumbers = numbers.slice(); // created a NEW array into a new variable (not directed) - a SHALLOW CLONE

// numbers.push(6); //makes numbers and copied numbers 1-6 but doesnt affect the newNumbers

// console.log(numbers); //[1, 2, 3, 4, 5, 6]
// console.log(copiedNumbers); //[1, 2, 3, 4, 5, 6]
// console.log(newNumbers); // [1, 2, 3, 4, 5]

// console.log(numbers === copiedNumbers); // true
// console.log(newNumbers === numbers); // false (cause newNumbers was created via Spread Operator)

// *** CLONING OBJECTS ***

// *** 1st way: Spread Operator

// const person = {
//   name: `John`,
//   age: 20,
// };

// const otherPerson = { ...person }; // create a shallow clone on new variable, new directed version

// person.age = 22; // this changes the value of const.person from 20 to 22/ BUT NOT the otherPerson's version of age

// console.log(person); // {name: 'John', age: 22}
// console.log(otherPerson); // {name: 'John', age: 20}

// *** 2nd way: Object.assign

// const variable = Object.assign({}, originalname) - SYNTAX

// const person = {
//   name: `John`,
//   age: 20,
// };

// const otherPerson = Object.assign({}, person); // create a shallow clone on new variable, new directed version  - assign a new object to the new variable.

// person.age = 22; // this changes the value of const.person from 20 to 22/ BUT NOT the otherPerson's version of age

// console.log(person); // {name: 'John', age: 22}
// console.log(otherPerson); // {name: 'John', age: 20}

// *** DEEP CLONING ***

// shallow cloning way - SPREAD OPERATOR
// const person = {
//   firstName: `Emma`,
//   car: {
//     brand: `BMW`,
//     color: `blue`,
//     wheels: 4,
//   },
// };

// const newPerson = { ...person};

// newPerson.firstName = `Mia`; // newPerson is now Mia, but person is still Emma
// newPerson.car.color = `red`; // car color for both changes to red? so what gives? // well we only remove the reference from outer object

// console.log(person);
// console.log(newPerson);

// below is still a shallow clone cause only 2 levels

// const person = {
//   firstName: `Emma`,
//   car: {
//     brand: `BMW`,
//     color: `blue`,
//     wheels: 4,
//   },
// };

// const newPerson = { ...person, car: { ...person.car } }; // car: {  ... person.car}; removes the reference for the person.car and all its properties

// newPerson.firstName = `Mia`; // newPerson is now Mia, but person is still Emma
// newPerson.car.color = `red`; // car color is now red for only newPerson

// console.log(person);
// console.log(newPerson);

// BUT THIS ONLY WORKS FOR 2 LEVELS OF DEPTH

// example
// const person = {
//     firstName: `Emma`,
//     car: {            < - depth 1 os firstName and car
//       brand: `BMW`,   < - depth 2 are the values inside car
//       color: `blue`,
//       wheels: 4,
//     },
//   };

// when we want the whole deep to change all the way through, that's where we create a deep clone

// DEEP CLONING method 1 *** json.stringify ***

// converts a js object into string

// const human = {
//   firstName: `Emma`,
//   car: {
//     brand: `BMW`,
//     color: `blue`,
//     wheels: 4,
//   },
// };

// const newHuman = JSON.parse(JSON.stringify(human)); // becomes an object but a DEEPER CLONE new reference for whole object - STUDY THIS SYNTAX

// newHuman.firstName = `Mia`;
// newHuman.car.color = `red`;

// //proof that human and newHuman are different?
// console.log(human === newHuman); // false

// console.log(human);
// console.log(newHuman);

// *** THE DOM ***
