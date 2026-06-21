// ******************* Operations ***************************

// JavaScript + operator special hai.

// RULES:
// Agar string involved hai, toh + concatenation karta hai.
// Agar dono values number hain, toh addition karta hai.
// Concatenation/addition decide karne se pehle JS values ko ToPrimitive conversion se primitive value mein convert karta hai.

// ToPrimitive kya hai?
// Objects directly add ya concatenate nahi ho sakte.
// JS pehle object ko primitive (string, number, bigint, boolean, symbol, null, undefined) mein convert karta hai.

let value = 3;
let negValue = -value;  
console.log(negValue); //-3

console.log("1"+2);  //12 
console.log(1+"2");  //12 
console.log(1+2);    //3
console.log("1"+"2");  //12

console.log("1"+2+2) //122
console.log(1+2+"2") //32

console.log(+true); //1
// console.log(true+); //error



