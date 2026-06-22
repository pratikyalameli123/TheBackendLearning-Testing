//stack memory and heap memory
//stack memory is used in primitive data types and heap memory in non primitive

//stack mai jabhi memory banega toh uska ek copy banta hai, while in heap jabhi memory banega toh usme ek reference diya jaaega original memory ka

let myWholeName = "pratikyalameli";

let anotherName = myWholeName;
anotherName = "PRATIKYALAMELI";

console.log(myWholeName);
console.log(anotherName);

let userOne = {
  email: "userone@google.com",
  upi: "user@upi",
};

let userTwo = userOne;

userTwo.email = "usertwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);


