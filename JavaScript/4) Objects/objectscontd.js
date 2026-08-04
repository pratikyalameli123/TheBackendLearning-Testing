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

console.log(regularUser.fullname.usefullname.lastname);
