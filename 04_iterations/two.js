const myObject ={
    js:'JavaScript',
    cpp:'C++',
    rs:'Rust',
}

//wrong Approach
// for (const [iterator,value] of myObject) {
//     console.log('Object Value',iterator,'and',value);
// }

// We can use for in loop for js 
for (const [key,value] in myObject) {
    // console.log('Key of Object:',key);
    console.log('Key of Object:',myObject[key]);
    // below is wrong for objects
    console.log('Key of Object:',key, 'Value of Object:',value);

}

// lets see for array 
const pr = ['js','cpp','rs'];

for (const val in pr) {
    // wrong for array 
    // console.log('Value:',val,'Item:',item);
    // correct below
    console.log('Values are:',pr[val]);
}
//Hence returns indexs in case of Array