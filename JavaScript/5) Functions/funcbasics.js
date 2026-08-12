
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("K");
}


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result  //another way to return the result without storing it in a variable
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`  
    //${username} ek template literal hai jo username ko string me convert karke return karega
}

function calculateCartPrice(val1, val2, ...num1){  //yeh (val1, val2, ...num1) ka matlab hai ki val1 aur val2 ko alag se pass karenge aur baaki ke saare arguments ko num1 me store karenge as an array
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "pratik",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //iska matlab hai ki humne object ke andar ke properties ko access kiya aur unko string me convert karke return kiya
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
}) //yeh ek anonymous object hai jo directly function me pass kiya gaya hai

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));