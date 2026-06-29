const arr = [1,2,3,4,5]
// console.log(arr);

const arr2 = new Array(1,2,3,4,5)
arr2.pop()
arr2.push(6)
arr2.push(7)
arr2.pop()

arr2.unshift(47) //adds 47 as first element
arr2.shift() //removes the first element
// console.log(arr2);

console.log(arr2.includes(9)); //boolean answer ie true or false
console.log(arr2.indexOf(3)); 

const newArr = arr2.join() //Adds all the elements of an array into a string
// console.log(newArr);

console.log("A ", arr2);
const myn1 = arr2.slice(1, 3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

console.log(myn1);
console.log("B ", arr2);


const myn2 = arr2.splice(1, 3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("C ", arr2);
console.log(myn2);