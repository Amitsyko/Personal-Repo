console.log("Hey Welcome to tut7.js in this tut we can learn array");

let num = [23,24,25,26];
let mixed = [23,"Amit",25,"Vishwakarma"];
mixed = ["Hey i am","Amit",25,"Vishwakarma"];
console.log(mixed);


let fruits = ["Mango","Graphs","Orange","Banna","WaterMelon","Pappya"];
fruits[1] = "Amit";

console.log(fruits);

let arrelement = fruits[0];
console.log('Hey your favrouite fruite is : ', arrelement);

// -----Mutating (Modifying) change the array value :-----
/*

let number = [23,24,25,26];

number.push(27);
// number.pop();
// number.shift();
number.unshift(22);
// number.splice(0,2);
number.reverse();
s
console.log(number);

*/

let math1 = ["Hey","I","am"];
let math2 = ["Amit","Vishwakarma"];

math1 = math1.concat(math2);
console.log(math1);

let myObj = {
    Name : "Amit_Vishwakarma",
    Profession : "Information_and_Technolgy",
    Address : "60 shri nagar colony Dewas (Madhya Pradesh)" 
}
console.log(myObj);