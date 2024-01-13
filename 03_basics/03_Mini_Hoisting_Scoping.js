// closures we need to know DOM

// closure-a feature of js where inner(nested) function
// can acess varaibles(scope) of outer(parent) function
// for child in which function is defined is  lexical scope (the scope in which it was defined)
const functionOne = () => {
  const userName = "John";
        const functionTwo = () => {
            const website = "Youtube";
            console.log(userName);
  };
//   console.log(website);
  functionTwo();
};
// functionOne();

// for functionTwo functionOne's scope  is global

if(1){
    const username ="hitesh";
    if (username==="hitesh"){
        const website = "Youtube";
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// hoisting is only possible with 'function' keyword

console.log(addOne(7))

function addOne(val){
    return val+1;
}

const addTwo =function(num){
    return num+2;
}
console.log(addTwo(5678));

    const addThree =(num)=>{
    return num+3;
}
 console.log(addThree(87));