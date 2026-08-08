const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 
// console.log(tinderUser);

const regularUser = {
    email: "some2gmail.com",
    fullname: {
        usefullname: {
            firstname : "pratik",
            lastname: "yalameli"
        }
    }
}

// console.log(regularUser.fullname.usefullname.lastname);
// console.log(regularUser.fullname?.usefullname.lastname); //agar fullname nahi raha toh ? daalke hamm ek "if-else" jaisa condition daalte hai. fullname rahega toh thik hai varna rehne do

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1,obj2) //Object.assign() multiple objects ko merge karta hai. mostly hamm isse bhi use nahi karte hai
// console.log(obj3);

const obj3 = {...obj1,...obj2}
console.log(obj3); 

const users = [
    {
        id : 1,
        email : "py@gmail.com"
    },
    {
        id : 2,
        email : "py2@gmail.com"
    },
    {  
        id : 3,
        email : "py3@gmail.com"
    },
    {
        id : 4,
        email : "py4@gmail.com"
    },
    {
        id : 5,
        email : "py5@gmail.com"
    },
    {
        id : 6,
        email : "py6@gmail.com"
    },

]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) 

console.log(tinderUser.hasOwnProperty('isLoggedIn'))                                   
console.log(tinderUser.hasOwnProperty('isLogged'))