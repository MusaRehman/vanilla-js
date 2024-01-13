//Singelton- Only one Object created of its kind ,
// but when we take literal approach it is not singleton 

//Object Literals

const mySym = Symbol('UniqueKey');

const JsUser={
name:"Joladio",
"Nick Name":"Jalo",
[mySym]:"UniqueKey2",
age:18,
location:"Akbar",
email:"yamaloko@google.com",
isLoggedIn:false,
lastLoginDays:["Mondays","Friday"],
}
// console.log(JsUser.NickName);
// all keys are string so we should give them as string when acessing them
console.log(JsUser["Nick Name"]);
console.log(JsUser[mySym]);
// symbol can be only be accessed by
console.log(typeof JsUser[mySym]);
 
// make user immutateable
// Object.freeze(JsUser);
console.log(JsUser);

//undefined-due to freeze
JsUser.newProperty = "atTheRate";
console.log("Again",JsUser.newProperty);

JsUser.greeting = function(){
    console.log("Addition Function");
}
//not considered a function yet
console.log(JsUser.greeting());