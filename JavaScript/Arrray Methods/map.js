const arr = [1, 2, 3];
const result = arr.map(num => num * 3);
console.log(result)

//realistic example 
const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mouse", price: 1200 },
  { id: 3, name: "Keyboard", price: 2500 }
];

const productCards = products.map(product => {
  return {
    productId: product.id,
    title: product.name,
    displayPrice: `Rs. ${product.price}`,
  };
});
console.log(productCards);

//abhi iske andar agar tujhe yeh condition daalna hai where id>2 then tujhe filter use karna hoga. 