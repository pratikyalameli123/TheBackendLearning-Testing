const name = "Pratik"
const age = 23;

console.log(`Hello my name is ${name} and my age is ${age}`);

//this is called template literals. what it uses is called string interpolation. it injects a string

// it also refers to combining strings using the + operator such as 

console.log("Hello my name is " + name + " and my age is " + age);

const newName = new String('pratikyalameli')
console.log(newName[0]);
console.log(newName.toUpperCase());
console.log(newName.charAt(9));

const newString = newName.substring(0,4)
console.log(newString);

const newStringTwo = newName.slice(1,4)
console.log(newStringTwo);

const url = "https://pratikyalameli.com/pratik%20yalameli"

console.log(url.replace('%20',''));
console.log(url.includes('nigga'));

// https://app.notion.com/p/Strings-and-Operations-388f7faf356b809db61eef30b0c55ed4