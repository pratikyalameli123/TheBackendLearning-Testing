//object literals
const mySym = Symbol("mykey1")

const jsUser = {
    name : "Pratik",
    age : 18,
    [mySym] : "mykey1",
    state : "Maharashtra",
    email : "pratik@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Sat"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email = "pratikyal@gmail.com"
Object.freeze(jsUser) //once freze values don't change anymore
jsUser.email = "hitesh@gmail.com"
console.log(jsUser);
