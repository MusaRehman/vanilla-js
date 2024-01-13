const balance = new Number(88);
const num = 88;
console.log(balance, num);

console.log(balance.toString().length);
console.log(balance.length);

//For Precision
// console.log(balance.toFixed(2));
// const randomNumber = 23.9867;
// console.log(randomNumber.toPrecision(5));

// const hundreds = 100000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// //Maths
// console.log(Math);

// const negValue = -55;
// console.log(Math.abs(negValue));
// console.log(Math.round(8.3));
// //Custom rounding
// // ceil-little greater than num is next num
// console.log(Math.ceil(4.00002));
// //oposite
// console.log(Math.floor(4.99999));
// //Squareroot
// console.log(Math.sqrt(66));
// console.log(Math.max(2,34,5,3,2));

// max is defined only
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10, max = 20;
// min and max is defined 
console.log(Math.floor(Math.random()*(max-min +1))+min);