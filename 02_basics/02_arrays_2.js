const marvel_heroes = ["thor", "ironMan", "spoderMan"];
const dc_heroes = ["flash", "Superman", "batman"];

//wrong adds array in array
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);

//correct way
// const newArr=marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);
// console.log(newArr);

// but there is another easy way- spread operator

// by ... it does not remain array but becomes all individual elements
const newHeroArray = [...marvel_heroes, ...dc_heroes];
console.log(newHeroArray);

// convert all array into single array
// setting depth by writing infinity
const anotherArray = [1, 2, 3, 5, [1, 23, 5, 66], 6, 23, [6, 6, [3, 2, 1]]];
const useableAnotehrArray = anotherArray.flat(Infinity);
console.log(useableAnotehrArray);

// data-formating
console.log(Array.isArray("Jamal"));
console.log(Array.from("Jamal"));
//should we make array with keys or values
console.log(Array.from({ name: "Jamal" }));
// so we have to specify 
console.log(Array.from(Object.values({ name: "Jamal" })));


// for multiple vars
let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
