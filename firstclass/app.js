//function statement ,function declaration
function a() {
  console.log("I am function A");
}
//function expression
// function expression is treated like a regular variable
var b = function () {
  console.log("I am Function B");
};
//anonymous function
// function(){}
//named function expression
var c = function d() {};
//difference b/w parameters and arguments
var sum = function add(
  a,
  b //params
) {
  return a + b;
};
console.log(sum(2, 3)); //5

//first class functions
//functions can be assigned to variables which can be passed to another
// function as arguments this is what first class citizens or first class
// function means
// example
var doSomething = function (a, b) {
  return a + b;
};
doSomething(10, 20);

//What are higher order functions?
/*A higher-order function is a function that
takes in other functions as its argument or returns a function as the result*/

//example of higher order function
