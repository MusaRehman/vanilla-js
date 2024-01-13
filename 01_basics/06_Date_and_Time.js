//Dates

// let myDate = new Date();
// console.log(myDate);
// //above is not readable
// // so we do below woking

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); //Simple Actual Date
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// //Date Data-Type is Object in Javascript
// console.log(typeof myDate);

// //When you have to create specific Date

// let customDate = new Date(2002,3,31);
// console.log(customDate.toString());

// But when I need Date in a Specific Format

// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toString());

// //Time Stamps- for quizes/polls

// let myTimeStamp = Date.now();
// console.log(myCreatedDate.getTime());

// convert into seconds 
// console.log(Math.floor(Date.now()/1000));

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMonth()+1);
console.log(myDate.getFullYear());

console.log(myDate.toLocaleString('default',{
    weekday:"long"
}))