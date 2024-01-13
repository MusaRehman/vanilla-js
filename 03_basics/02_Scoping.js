// var does hoisting and , const and let dont

//  understanding scoping
// {}

// other than hoisting main difference in variables
// are scoping-important


// var c= 7;
// let a =222;
// if(true){
// let a=10;
// const b =20;
// var c= 865420;
// }
// console.log(a);
// console.log(b);
//c is available even though its scope its ended
// console.log(c);

let a = 10;

if(1){
    let a =22;
    console.log(a);
}
console.log(a);