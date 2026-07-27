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

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "pratikyal@gmail.com"
// Object.freeze(jsUser) //FREEZE USE KARDIYA HAI TOH AAGE KA BHI NAHI LEGA VOH
// Object Literals wala common interview trap hai: freeze ke baad object ki structure bhi lock ho jaati hai, sirf values hi nahi.

jsUser.email = "hitesh@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JavaScript User. This is greeting");
}    
console.log(jsUser.greeting());


