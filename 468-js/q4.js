// first class function , function that take other fucntion as arguments ,
// can be treated as normal variable
function sum(cb, x, y) {
  return cb(x, y);
}

function add(x, y) {
  return x + y;
}

console.log(sum(add, 10, 12));

// first order function doesn,t take other fn as arguments

const subtract = (x, u) => {
  return x - u;
};

const ans = subtract(9, 7);
console.log(ans);

// higher order function

function applyOpertaion(operation, x, y) {
  return operation(x, y);
}

function multiply(x, y) {
  return x * y;
}

const answer = applyOpertaion(multiply, 3, 4);
console.log(answer);

// Currying transforms a function that takes multiple arguments into a sequence of functions that each take a single argument
const multiarg = (a, b, c) => a + b + c;
console.log(multiarg(3, 4, 5));

const fnCurry = (a) => (b) => (c) => a + b + c;
console.log(fnCurry(1)); // function: b => 1 + b + c
console.log(fnCurry(1)(2)); // function: c => 3 + c
console.log(fnCurry(1)(2)(3));

// Given the same inputs, a pure function will always return the same output.
// No Side Effects: The add function only computes the sum and does not modify anything outside its scope.

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Outputs: 5
console.log(add(2, 3)); // Outputs: 5 (always the same output for the same input)
