// var a = 12;
// var a;
// let a;
// let a = 12;
// const a = 12;

//declaration initilization
//temporal dead zone tdz
// console.log(a);
// let a = 12;
//hoisting
//var a=undefined
// console.log(a);
// a = 12;

var x=1;
{
    var x=2;
    console.log(x);
}

let a=1;
{
    let a=2;
    console.log( "INSIDE:",a);
}
console.log("OUTSIDE:",a);
