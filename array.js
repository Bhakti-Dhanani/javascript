//console.log("hi this is array demo")
let dish = ["biryani", "chat", "bhel"];
console.log(dish[0])

//modify array

dish[0] = "khakhra";
console.log(dish)


// ******** METHODS OF ARRAY ********

//1) join method ---- used to join two string

console.log(dish.join('**'));

//2) indexof --- it is case sensitive used to find index of element ogf array

console.log(dish.indexOf("chat"));

//3)concat --- used to concat two array 

let newarray = ["kajukatli", "gulabjambun","rbadi"];
console.log(dish.concat(newarray));

//4) length --- used to find length of array

console.log(dish.length);

//*******MUTED METHOD - change in original array */

//1)push-- add element in original array

console.log(dish.push("paratha"));
console.log(dish)

//2)pop - remove element from last

console.log(dish.pop())
console.log(dish)
