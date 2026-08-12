//scopes ka matlab hai ki kisi bhi variable ya function ko kaha tak access kiya ja sakta hai

let a =10;
const b =20;
var c =30;

{} //yeh hi scope hai jisme humne variables ko define kiya hai. yeh bataega ki function ya variable ko kaha tak access kiya ja sakta hai. agar humne kisi variable ko function ke andar define kiya hai to usko function ke bahar access nahi kar sakte. aur agar humne kisi variable ko function ke bahar define kiya hai to usko function ke andar bhi access kar sakte.  

if(true){
    let a = 40;
    const b = 50;
    var c = 60;
    console.log("Inside if block: ", a, b, c); //yaha pe humne if block ke andar variables ko access kiya hai.  
}

console.log("Outside if block: ", a, b, c); //yaha pe humne if block ke bahar variables ko access kiya hai.