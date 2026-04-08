// var a = document.queryselector("h1")
// console.log(a)

// var a = document.querySelector("h1");
// a.innerHTML = "Changed HTML"

// var b = document.querySelector("h1");
// b.style.color = "red";
// b.style.backgroundColor = "#f1f1f1";

// var c = document.querySelector("h1");
// c.addEventListener("click", function(){
//     a.innerHTML = "Clicked";
//     c.style.color = "blue";
//     c.style.backgroundColor = "yellow";
// })

var bulb = document.querySelector("#bulb");
var button = document.querySelector("button");
var flag = false;
button.addEventListener("click", function(){
    if(flag==false){
        bulb.style.backgroundColor = "yellow";
        console.log("ON");
        flag = true;
    } else {
        bulb.style.backgroundColor = "black";
        console.log("OFF");
        flag = false;
    }
})   

var h1 = document.querySelectorAll("h1");
console.log(h1);
h1.forEach(function(element){
    element.addEventListener("click", function(){
        element.style.color = "red";
    })
})

var box = document.querySelector("#box");
box.innerHTML = "<h1>KOI BAAT NAHI (zzzz)</h1>";