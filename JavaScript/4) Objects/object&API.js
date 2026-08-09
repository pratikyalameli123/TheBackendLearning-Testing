const course = {
    coursename : "JavaScriptBasics",
    price : "999",
    courseInstructor : "PratikY"
}

//course.courseInstructor ; agar iss object ka koi value print karni ho toh aise karte hai but agar code clean karna hoga ya 3-4 baar bulana hoga toh ekhi line likhna padega so;

const {courseInstructor : instructor} = course
// shortcut hai yeh
//const {joh value wapis bulana hai : nickname of that value to remember} = kaha se hai voh value

console.log(instructor);
//just call by the nickname

