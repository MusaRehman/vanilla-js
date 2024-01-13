//Passing multiple values in a fucntion
const params = (...val)=>{
    return val;
}
console.log(params(500,87,98,4567))
// or 
const params1 = (one,two,...val)=>{
    return val;
}
console.log(params1(500,87,98,4567))

// Objects and Functions 
const user ={
    username:"Ali",
    price:3444,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username:'hmmmm',
    price:7865
})

const myArray = [23,45,23,68,24];

function arrayy(val){
    return val[4];
}
console.log(arrayy(myArray))
