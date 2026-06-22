//method of array named reduce is used to to "reduce" the array to a single value. here with callback, an accumulator is used where each iteration updates the accumulator

//reduce is used when u need one final output like sum, product and all that

//it reduces the boilerplate loops, and it can lead to bugs where the accumulator logic is unclear 

const nums = [1,2,3,4];
const sum = nums.reduce((acc,curr)=>{
    return acc + curr;
},0); //0 is the value of accumulator ie acc
console.log(sum)

// Execution breakdown:
// Initial value: acc = 0

// Iteration 1:
// curr = 1
// acc = 0 + 1 = 1

// Iteration 2:
// curr = 2
// acc = 1 + 2 = 3

// Iteration 3:
// curr = 3
// acc = 3 + 3 = 6

// Iteration 4:
// curr = 4
// acc = 6 + 4 = 10

// Final result → sum = 10