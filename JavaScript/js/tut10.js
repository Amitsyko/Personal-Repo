console.log("Hey Welcome to tut10.js --In this tut we can learn function in JavaScript");

let name = "Amit";
let mood = "Good";

function myGreet(name, mood = "Better the Day..!!") {
    let msg = `Hey Happy Birthday ${name} Now How's the day ${mood}`;
    return msg;
}

let val = myGreet(name, mood);

// console.log(val);
// greet(mood);


const myObj = {
    Vname: "Anuj",
    game: function () {
        return "GTA";
    }
}
// console.log(myObj.Vname);

arr = ["fruit", "vegitables", "cookies"];
arr.forEach(function (element, index, array) {
    // console.log(element,index,array);
});

if (1) {
    var i = 234000;
    console.log(i);
}
console.log(i);

function ui(name) {
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("Amit"), i);