let score = "33"; //yeh ofc number ban jaaega aur number hi hoga
let score1 = "33abc"; //convert hoke NaN bataega
let score2 = null;  //0 aaega 
let score3 = undefined; //NaN aaega
let score4 = true; //number hoke 1 aaega 
let score5 = false; //number hoke 0 aaega 
let score6 = ""; //0 hoga

// let score = "33abc"; saala yeh bhi number hi bolega but jabh tu value check karega voh NaN aaega

// console.log(typeof score);  string

// console.log(typeof (score));   another way ie writing in method call. score value ko function ke andar argument ki tarah pass kar raha hai
 //Method = function jo kisi object ke andar stored ho.

let valueInNumber = Number(score6)
console.log(typeof valueInNumber);
console.log(valueInNumber);

