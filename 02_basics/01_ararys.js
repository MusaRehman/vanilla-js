//Arrays []
// arrays are resizeable
 
const myArray = [1,2,3,4,5,6,7,8,9,true,'Name'];
// console.log(myArray);
// const newArray = {...myArray}
// myArray[0]=7;
// console.log('Second',myArray,newArray);

// myArray.push('yamaloko');
// myArray.push('hmm');
// myArray.pop();

// myArray.unshift(9);//adds element to first
// myArray.shift();//remove first elemnet
// console.log(myArray);

// console.log(myArray.includes(6));

//converting all values into string
console.log(myArray);
const newArr = myArray.join()
// console.log(typeof newArr);

// slice and splice 

const myNewArray = myArray.slice(1,6);


console.log("New",myNewArray);

//Splice takes out the portion out of the old array
// and returns new 
const myNewArrayTwo = myArray.splice(1,6);
console.log(myArray);
console.log("Newest",myNewArrayTwo);