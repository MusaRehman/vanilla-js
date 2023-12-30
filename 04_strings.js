// const name = "Musa";
// const repoCount = 50;

// this is outdated Syntax
// console.log(name  +repoCount);

//New good syntax is:
// (interpolation)
//can use string methods
// console.log(`${name} and ${repoCount}`);

// let str = "NMR";

// let str1 = new String("NMR");

// console.log(str == str1); //True
// console.log(str === str1); //False

const game = new String("Prettier");

// Accessing a specific String element 
// console.log(game[0]);
// console.log(game.__proto__.bold());

console.log(game.length); //Property
console.log(game.constructor); //Property
console.log(game.toUpperCase()); //Function f

console.log('----------------------');
console.log(game.charAt(3));
console.log(game.indexOf("i"));

//last index is not included
const gameTwo = game.substring(1,5);
console.log(gameTwo);

//give negative values to strat in from reverse
const gameThree = game.slice(-8,3);
console.log(gameThree);

const newStr ="   Jamal   ";
console.log(newStr);
console.log(newStr.trim());

const url = "http://go%20ogle.com";
console.log(url.replace('%20','-'));

console.log(url.includes('gle'));