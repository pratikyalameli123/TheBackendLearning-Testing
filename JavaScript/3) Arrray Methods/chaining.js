let arr = [1, 2, 3];
let chainingEg = arr.filter((nums) => nums > 1).map((nums) => nums * 2);


//-----------------------------------------------------------------------------------------
//Filter even numbers, then return their squares.
const nums = [1, 2, 3, 4, 5, 6];
const evenSq = nums.filter((num) => num % 2 == 0).map((num) => num * num);
// console.log(evenSq);

//-----------------------------------------------------------------------------------------
// Get names of users who are 18+.
const users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 19 },
];
const eigplus = users.filter((nums) => nums.age > 18);
// console.log(eigplus);

//-------------------------------------------------------------------------------------------
// Find total price of in-stock products.
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
];

const totalPrice = products
  .filter((item) => item.inStock)
  .reduce((sum, item) => sum + item.price, 0);
// console.log(totalPrice);

//-------------------------------------------------------------------------------------------
// Get total engagement (likes + comments) of posts having more than 10 likes

const posts = [
  { title: "Post1", likes: 10, comments: 2 },
  { title: "Post2", likes: 5, comments: 1 },
  { title: "Post3", likes: 20, comments: 5 }
];

const totEng = posts
.filter((item)=>item.likes>10)
.reduce((sum,item)=>sum+item.likes+item.comments,0);
// console.log(totEng);
//-------------------------------------------------------------------------------------------
// Calculate net balance (credits - debits) using chaining.
const transactions = [
  { type: "credit", amount: 100 },
  { type: "debit", amount: 50 },
  { type: "credit", amount: 200 },
  { type: "debit", amount: 30 }
];

const netBal = transactions
.reduce((sum,total)=>sum+total.amount,0)
console.log(netBal);
