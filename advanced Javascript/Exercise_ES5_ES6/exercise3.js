// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
let a2 = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

//don't know about this one
const {firstName, lastName, age, eyeColor} = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const obj = {
  a,
  b,
  c
};


// Template strings
const firstName = 'John';
const city = 'flagstaff';

const greetingBest = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;
var message = "Hello " ${firstName}  have I met you before? I think we met in " + city + " last summer no???";


// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"

let sym1 = Symbol();

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
