// let + const

const player = 'Bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
    console.log(wizardLevel);
}

return wizardLevel;

//Destructing

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel} = obj;

//Object Properties

const name = 'John Snow';

const obj  = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

//Template Strings
const name = "Sally"
const age = 34;
const pet = "horse";

const greeting = "Hello" + name + "you seem to be doing"

const greetingBest = `Hello ${name} you seem to be ${age-10}. What  a lovely ${pet} you have}`;

//default arguments

function greet (name='', age=30, pet='cat') {
  return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have}`;
}

//Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3;

//arrow functions

function add(a, b) {
   return a + b;
}

const add2 = (a, b) => a + b;
