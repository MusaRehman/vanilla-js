// for of loop 
// Moslty referred as iterartor of Object
// Object here is not js-Object MDN documnetaion
// meant the thing to be iterated
const arr = [1,2,34,5,76];

for(const i of arr){
    // console.log('Array index',arr[i]);
    // wrong becasue for of firectly iterate over 
    // values
    console.log('Array Item',i);
    // correct 
}
const greeting = "Hey          There !";

for (const greet of greeting) {
    // iterates over every single strig chararcter
    console.log('Greeting for of:',greet);
}

// JS Maps
// Maps is an Object that holds key value pair 
// Unlike Object the key has to be in string any other
// type will be converted into string
// In Map the datatype of key can be anything
// Objects: The order of keys in an object is not guaranteed. In most modern JavaScript engines, object properties are ordered based on the order of insertion, but this behavior is not guaranteed by the ECMAScript specification.
// Maps: The order of keys in a map is guaranteed to be the order in which they were added. This makes maps useful when the order of key-value pairs is significant.
const map = new Map();
// console.log(map);
map.set('PKR',"Pakistan");
map.set('USA','America');
// console.log(map);

for (const [key,value] of map) {
    console.log('Mapped',key,'and',value);
}

const myObject ={
    gameOne:'gta 5',
    gameTwo:'nsf',
    gameThree:'Tekken 7',
}

//wrong Approach
for (const [iterator,value] of myObject) {
    console.log('Object Value',iterator,'and',value);
}