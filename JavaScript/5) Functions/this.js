const user = {
  username: "Pratik Yalameli",
  price: 9999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to the Website`);
  },
};

user.welcomeMessage();
user.username = "Nigmaballs";
user.welcomeMessage(); //this will print output as Nigmaballs, Welcome to the Website
console.log(user); //this will print the user object with updated username

console.log(this); // this will refer to the global object

function myFunction() {
  console.log(this.username); //this will refer to the global object and print undefined because username is not defined in the global object
}
myFunction();
//jabh hamm this yeh keyword ko function mai chalate hai to yeh global object ko refer karta hai. isliye uska output global object hoga.


//hamm this.keyword ko function ke andar use karte hai to yeh us object ko refer karta hai jiske andar yeh function call hua hai. isliye agar humne function ko kisi object ke andar call kiya to this keyword us object ko refer karega.

const chai = () =>{
  let username = "Pratik Yalameli";
  console.log(this.username); 
}
chai(); 

//Remember: Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope. In this case, since 'chai' is defined in the global scope, 'this' will refer to the global object, and 'this.username' will be undefined because 'username' is not a property of the global object.

//In summary, the behavior of 'this' in JavaScript depends on how a function is called. In regular functions, 'this' refers to the object that called the function, while in arrow functions, 'this' is lexically inherited from the surrounding scope.

//hindi mai samjhae to jab hum this keyword ko function ke andar use karte hai to yeh us object ko refer karta hai jiske andar yeh function call hua hai. isliye agar humne function ko kisi object ke andar call kiya to this keyword us object ko refer karega. lekin arrow functions mai this keyword apne surrounding lexical scope se inherit hota hai. isliye agar arrow function global scope mai define kiya gaya hai to this keyword global object ko refer karega aur agar global object mai username property defined nahi hai to output undefined hoga.