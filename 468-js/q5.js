// let keyword is block scope
let a = 10;

{
  let a = 89;
  console.log(a); // 89
}
console.log(a); // 10

// var is function scoped
var b = 10;

{
  var b = 89;
  console.log(b); // 89
}
console.log(b); // 89 because fn scoped

function userDetails(username) {
  if (username) {
    console.log(salary); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization in TDZ
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible due to function scope)
  console.log(age); //error: age is not defined(due to block scope)
}
userDetails("John");
/*
 The Temporal Dead Zone(TDZ) is a specific period or area of a block where
 a variable is inaccessible until it has been intialized with a value.
 let and const keywords, but not with var. In ECMAScript 6, let and const
 causes a ReferenceError.
*/
function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}
