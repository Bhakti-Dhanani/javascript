//1)for loop -- run multiple time 
for (let i=0; i<=5 ; i++){
    console.log("hello",i)
}
//for loop in array

let dish = ["chat", "biryani", "bhel"];
console.log(dish)
//access array value

for(let i=0; i<dish; i++){
    console.log(dish[i]);
}

//*****iteration & value of i */

for(let i=1; i<=5; i++){
    console.log("for loop",i)

}

//2)while loop-- first line initialization, second condition and block statement then increment/decrement

let i=1;
while(i<=5){
    console.log("while loop",i)
    i++;
}

//while loop in array

let dish1 =["bhel","chat","kaju"]
let j=0;
while(j<dish1.length){
    console.log("dishes =",dish1[j]);
    j++;
}

//3)do while loop -- run at least one time

let x=1
do{
    console.log("at run 4 time",x);
    x++;
}while(x<5)

//4) ternary operatore ?;

let age =20;
let result = age>18?"qulify":"fail or not qulify";
console.log(result)