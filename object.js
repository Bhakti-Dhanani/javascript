//object example

let car = {
    color:"black",
    model:"2022",
    company:"toyota"
}
console.log(car);
console.log(car["color"])
console.log(car.model)
 // modify object

 car["color"]="brown"
 car.company ="BMW";
 console.log(car.color)
 console.log(car.company)
 console.log(car)

 //delete property

 let obj ={
    
    property1 : "value1",
    property2 : "value2"
 }
 console.log(obj.property1)
 delete obj.property1
 console.log(obj.property1)

 //method in object

 /**let person ={
    age: function(){
        let agecal= 2023-2008
        return age;
    }
   // console.log(`age is ${person.agecal},(2008)`)
 };
 console.log(`age is ${person.age()}`) */

 //****** this keyword in jS */
 
 let person = {
    fname: "bhakti",
    lname: "dhanani",
    city: "surat",
    Education: "BE",
    getsummery: function(){
        return `${this.fname} ${this.lname} from ${this.city}`
    } 
 }
 console.log(person.getsummery())

 //*** for each method */
  let dish = ["bhel", "biryani", "pakoda"];
  //using for loop
  for(let i=0;i<dish.length;i++){
    console.log(dish[i])
  }
  console.log("* * * * * ")
  //using foreach loop
dish.forEach(function(element){
    console.log(element);
})

//object inside array

let blocklist = [{username:"abc" , reason: "noting"}, {username:"pqy",reason:"dontknow"}];
console.log(blocklist)
for( let i=0;i<blocklist;i++){

    console.log(blocklist[i].username)
}

//maths function 

console.log(Math);
let n = 7.8
console.log(Math.round(n))
console.log(Math.floor(n))
console.log(Math.ceil(n))
console.log(Math.trunc(n))

// bind function
function hello(){
    console.log(`hello bhakti ${this.greet}`)
}
let user ={
    greet:"goodmorning"
}
let abc = hello.bind(user);
abc();

//pass by reference

let arr =[1,2,3,4,5];
let getreff =arr
console.log(arr);
console.log(getreff);
// remove one element in getreff autometically remove in arr 
console.log(getreff.shift())
console.log(getreff)

//pass by value [...=spread operatore]

let getvalue =[...arr]
console.log(arr)
console.log(getvalue.shift())
console.log("*******")
console.log(arr)
console.log(getvalue)

//for in loop (used in object)
let vehical={
    model:1212,
    color:"black",
    company:"rolls-roys"
}
//show the all key in object (#here key is variable you can use any name)
console.log(vehical)
for(let key in vehical){
    console.log(key)
}
/**for show all the value in the object
let a= ""
for(let x in car){
    x=a+vehical(x)
}
console.log(a)*/
