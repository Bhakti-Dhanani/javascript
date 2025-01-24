//declaration of function
function name(){
    console.log("this is demo function")
}
name()

let fun = function(){
    console.log("hi");
}
fun()
//pass parameter in function

let invite = function(fname){
    console.log(` my name is ${fname}`)
}
invite("bhakti")

//return value of function

let age = function(birthyear, currentyear){
    let agecal = currentyear-birthyear;
    console.log(`your age is = ${agecal}`)
    return(age)
}
age(2003,2024)

//2) arrow function==>

let invites = ffname=>`welcome ${ffname}`
console.log(invites("bhakti"));

//function return another function

let compliment = function(msg){
    return function(myname){
        console.log(`${msg} ${myname}`)
    }
};
console.log(compliment ("good morning")("bhakti"))

//2 nd method that return function


//immediately invoke function expression

// set timeout set interval
//**setTimeout is delay as per given time  */
function greeting(){
    console.log("good afternoon")
}
setTimeout(greeting,6000)

//passing parameter

function wishes(hi){
    console.log(`good night ${hi}`);
    //setTimeout(wishes,500000,"bhakti")
}
setTimeout(wishes,8000,"bhakti")

//setinterval

//**function mydemo(){
   // console.log("hello this is setinterval example")

//}
//setInterval(mydemo,5000) 

//hoisting 
let test = 30;
console.log(test)

