// so visualize you are in a object scope {} and
// you want to refer some variable that is present
// witin that scope in a function etc... so you will
// first use this keyword along with a dot to use that
// scope's variabale etc (refered 'current context)

const userOne={
    name:'Omega shenron',
    price:887,
    welcomeOne: function(){
        console.log(`${this.name} welcome to our website.`);
        console.log(this);
    }
}
// userOne.welcomeOne()
// userOne.name ="Vegeta";
// userOne.welcomeOne()
// console.log(this);
// in nodejs this will return {} , empty but 
// not in Console of web it will return windows etc

// const user={
//     name:'Omega shenron',
//     price:887,
//     welcome: ()=>{
//         console.log(`${this.name} welcome to our website.`);
//     }
// }
// // console.log(user.welcome());
// user.welcome();

//arrow functions and arrow func. with this

// we cannot use this in function/s
// function chai(){
//     let name ="Sam";
//     console.log(this.name);
//     //interesting output
//     // we can see many things and we can also 
//     // access them
// }

// chai();

// same as
// const ChaiThree = function(){
//     let name =0;
//     console.log(this.name);
// }
// ChaiThree();

// arrow function do not have their 'this'
// arrow function cannot be used as constructor with new
// with new keywork regular functions can be used as constrcutor 
const chaiOne = ()=>{
    console.log(this);
}
// chaiOne();

// Basic Arrow Functions 

const addTwo = (val1,val2)=>{
    return val1+val2;
}
console.log(addTwo(98,89))

//Implicit Return Arrow Functions 

const Addthree=(v1,v2,v3)=> v1+v2+v3;

console.log(Addthree(5,46,3));

// const myArray = [12,3,4,5,6,4];

// myArray.forEach(()=>)
