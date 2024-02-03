console.log("Hey Welcome to tut13.js--In this tut we can learn Element Selector in JavaScript");

// --Change contents Id's class Name styles anything you want--

// There are two type of Element Selector--

// 1-- Single Element Selector.
// 2-- Multi Element Selector.



// --Single Element Selector--

let element = document;
// element = element.getElementsByClassName("red");
element = element.getElementById("myfirst");
// element = element.className = "unique";
// element = element.childNodes[0];
// element = element.parentNode;
// element.style.color = "red";
element.innerText = "Amit is a good boy";
// element.innerHTML = "<b>Amit is a good boy</b>";
console.log(element);


//--Multi Element Selector--

// let elm = document.querySelector("h1");
// elm.style.color = "red";
// elm.innerText = "Hey Welcome Amit Vishwkarma"
// console.log(elm);


// let slm = document.querySelector("#myfirst");
// slm.id = "unique";
// slm.className = "hello-world";
// slm.innerText = "Your buddy";
// console.log(slm)

let slm = document.getElementsByClassName("child");
Array.from(slm).forEach(element => {
    element[0] = element.innerHTML = "red";
    console.log(element)
});

