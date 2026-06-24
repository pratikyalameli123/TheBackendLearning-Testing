const arr = ["Pratik", 23];

const [name, age] = arr;

console.log(name);
console.log(age);

// Example 1
const user = {
    city: "Mumbai",
    name: "Pratik"
};

const { name, city } = user;

// Example 2
console.log(name)
console.log(city)

const user = {
    name: "Pratik",
    age: 21
};

const {userName, userAge} = user;

console.log(userName);
console.log(userAge);

const arr = ["A", "B", "C"];
const [first, , third] = arr;
console.log(first);
console.log(third);


// Example 3
const user = {
    name: "Pratik",
    age: 21
};
const { name, role } = user;
console.log(role);

function getUserInfo(user) {
    console.log(user.name);
    console.log(user.age);

    const {name, age} = user
}







