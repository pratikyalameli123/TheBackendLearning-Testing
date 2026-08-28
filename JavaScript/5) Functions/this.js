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