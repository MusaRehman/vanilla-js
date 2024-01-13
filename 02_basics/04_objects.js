//Singleton Object
const tinderUser = new Object();


tinderUser.id ="757HTTR";
tinderUser.name="Champion";
tinderUser.isLOggedIn =false;

console.log(tinderUser);

const user = {
    email:"yamaloko@google.com",
    fullname:{
        username:{
            firstname:"yama",
            lastname:"loko",
        }
    }
}

// console.log(user.fullname?.username.firstname);

const obj1 ={1:"6",2:"k"}
const obj2 ={1:"6",2:"k"}

//wrong
// const obj3={obj1,obj2};
// console.log(obj3);

// right-copy 
//give first as {} for surety
// const obj3 =({},obj1,obj2);
// console.log(obj3);

// this is mostly used 
// const obj3 ={...obj1,...obj2}
// console.log(obj3);

const users = [
    { name: 'Alice', age: 25, role: 'Admin' },
    { name: 'Bob', age: 30, role: 'User' },
    { name: 'Charlie', age: 28, role: 'Moderator' },
    { name: 'David', age: 22, role: 'User' },
    { name: 'Eve', age: 35, role: 'Admin' },
    { name: 'Frank', age: 27, role: 'User' },
    { name: 'Grace', age: 32, role: 'Moderator' },
  ];
  const users1 = {
    names: ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'],
    ages: [25, 30, 28, 22, 35, 27, 32],
    roles: ['Admin', 'User', 'Moderator', 'User', 'Admin', 'User', 'Moderator'],
  };
  
  console.log(users);
  
  
//fetch keys from object and put in an array

console.log(Object.keys(users1));
console.log(Object.values(users1));

  console.log(Object.entries(users1));
//if value does nt exists
console.log(tinderUser.hasOwnProperty('name'));

//Object Destructuring
// const course  vidio 18/51 time 2:30 