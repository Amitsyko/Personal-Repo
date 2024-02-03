console.log("Hey Welcome to tut4.js----We can learn in this tut Data Types-----");

/*

There are two type of data types in JavaScript

1. Primitive Data Type
2. Reference Data Type

*/

/*----Primitive Data Type----

1- String.
2- Boolean.
3- Null.
4- Undefined.

*/

/*
const name = "Amit Vishwakarma";
console.log(name);
console.log("Data Type is " +(typeof name));

const num = 33+33;
console.log(num);
console.log("Data Type is " +(typeof num));

const condition = true;
console.log(condition);
console.log("Data Type is " +(typeof condition));

const product = null;
console.log(product);
console.log("Data Type is " +(typeof product));

const materail = undefined;
console.log(materail);
console.log("Data Type is " +(typeof materail));
*/


/*----Reference Data Type----

1- Array.
2- Functions.
3- Object Literals.
5- Dates.

*/

let arr = ["Amit","Ankit",33,34];
console.log(arr);
console.log("Data type is " + (typeof arr));

let arr1 = {
    Name : "Amit_Vishwakarma",
    Age : 26,
    Profession : "Information_And_Techonology",
}
console.table(typeof arr1);

function element () {
    
}
console.log(typeof element);

const date = new Date();
console.log(typeof date);