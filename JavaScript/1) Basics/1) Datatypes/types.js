// Primitive Data Types
// Ye directly value store karte hain. Copy karne par actual value copy hoti hai.

// String → Text data
let name = "Pratik";

// Number → Integer ya decimal numbers
let age = 22;
let price = 99.99;

// Boolean → True ya False
let isLoggedIn = true;

// null → Intentional empty value
let user = null;

// undefined → Value assign nahi hui hai
let city;
console.log(city); // undefined

// Symbol → Unique identifier create karta hai
let id = Symbol("123");

// BigInt → Bahut bade integers ke liye
let bigNumber = 12345678901234567890n;

// Reference (Non-Primitive) Data Types
// Ye memory address (reference) store karte hain. Copy karne par reference copy hota hai, actual data nahi.

// Array → Multiple values store karne ke liye
let fruits = ["Apple", "Mango", "Banana"];

// Object → Key-value pair store karta hai
let student = {
    name: "Pratik",
    age: 22
};

// Function → Reusable block of code
function greet() {
    console.log("Hello");
}

// Quick Memory Trick

// Primitive = Single value → "Pratik", 22, true
// Reference = Collection ya complex structure → [], {}, function(){}
// Primitive copy → New independent value
// Reference copy → Same object ko point karta hai

// Example:

let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]

// Second example mein dono same array ko refer kar rahe hain, isliye change dono mein dikhta hai.