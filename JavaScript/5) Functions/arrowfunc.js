const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));


// ====================================================

const greetArrow = (name) => "Hello " + name;
console.log(greetArrow("Alice")); // Output: Hello Alice

// ============================================

const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false

// ============================================
const nums = [1, 2, 3, 4];
const result = nums.map((num) => num * 2);
console.log(result);