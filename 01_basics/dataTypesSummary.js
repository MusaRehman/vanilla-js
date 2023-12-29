// Primitive Data Types:

// These are the basic building blocks of data.
// They are immutable, which means their values cannot be changed.
// There are six primitive data types in JavaScript:
// Number: Represents numeric values.
// String: Represents textual data.
// Boolean: Represents either true or false.
// Null: Represents the intentional absence of any object value.
// Undefined: Represents an uninitialized variable or a variable that has been declared but not assigned a value.
// Symbol: Introduced in ECMAScript 6 (ES6), represents a unique identifier.
// Object Data Type:

// Objects are complex data types that can hold key-value pairs and methods.
// They are mutable, which means their values can be changed.
// Objects can be created using the Object constructor or object literals {}.
// Examples of objects include arrays, functions, and user-defined objects.

// const id = Symbol('seven');
// id=9;
// console.log(id);//error

// const var1 =Symbol('name')
// const var2 =Symbol('name')
// console.log(var1==var2); //cause symbol is unique

// BigInt
// const num = 2345678900987654n;
// console.log(typeof(num));

// // non-primitive dataTypes
// let user = {
//   name: "Musa",
//   age: 21,
// };
// let userTwo = user;
// console.log("main", user);
// console.log("main", userTwo);
// userTwo.age = 23;
// console.log("main One", user);
// console.log("main Two", userTwo);

//Both Changed due to refrence from memory

//we can create shallow copy to avoid this
// let userTwo = {...user}
