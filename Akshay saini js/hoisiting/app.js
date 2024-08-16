//hoisiting

getName();
//returns the function since it is in general form and the memory block will store it like a whole function itself
console.log(newName);
//returns undefined since arrow functions behave diffrently in js
console.log(friendName);
//returns undefined since this will also behave like a variable itself
console.log(x);
//returns undefined



var x = 7;

function getName(){
    console.log("my name is khan");
}

var newName =()=>{
    console.log("My name is harish")
}
var friendName = function(){
    console.log("Ridhimaa is my friend");
}