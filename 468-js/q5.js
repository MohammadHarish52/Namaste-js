// let keyword is block scope
let a = 10;

{
  let a = 89;
  console.log(a); // 89
}
console.log(a); // 10

var b = 10;

{
  var b = 89;
  console.log(b); // 89
}
console.log(b); // 89 because fn scoped

function userDetails(username) {
  if (username) {
    console.log(salary); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible due to function scope)
  console.log(age); //error: age is not defined(due to block scope)
}
userDetails("John");
