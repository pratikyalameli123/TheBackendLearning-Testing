let arr = [1, 2, 3];
let chainingEg = arr.filter((nums) => nums > 1).map((nums) => nums * 2);
console;

//-----------------------------------------------------------------------------------------
//Filter even numbers, then return their squares.
const nums = [1, 2, 3, 4, 5, 6];
const evenSq = nums.filter((num) => num % 2 == 0).map((num) => num * num);
console.log(evenSq);

//-----------------------------------------------------------------------------------------
// Get names of users who are 18+.
const users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 19 },
];
const eigplus = users.filter((nums) => nums.age > 18);
console.log(eigplus);

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
console.log(totalPrice);

//-------------------------------------------------------------------------------------------

