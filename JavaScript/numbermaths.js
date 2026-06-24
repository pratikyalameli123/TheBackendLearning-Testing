const score = 400;
// console.log(score);

const balance = new Number(100.278)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed());

const otherNumber = 29.89434;
// console.log(otherNumber.toPrecision(3));

const hundred =1000000;
// console.log(hundred.toLocaleString('en-IN'))


// __________________________________________________________________________________//
//*************Maths*************//

console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(4.692562));
console.log(Math.floor(4.2));
console.log(Math.ceil(4.2));
console.log(Math.min(4,3,2,54,323,21));
console.log(Math.max(4,3,2,54,323,21));

console.log(Math.random())  
console.log((Math.random()*10) + 1) 
console.log(Math.floor(Math.random()*10) + 1)
// Math.random() → 0 to 0.999...
// * 10 → 0 to 9.999...
// Math.floor() → 0 to 9
// + 1 → 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
