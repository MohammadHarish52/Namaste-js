// callbacks
// fn passes as arguments to other fn
function greet(message) {
  console.log(message);
}

function greetTheMessage(cb) {
  let mesage = prompt("Enter the mesage");
  cb(mesage);
}

greetTheMessage(greet);

// ------

// single threaded nature of js and async handling
function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction();
secondFunction();

// Output;
// Second function called
// First function called

// -----

// what is a promise
// an object producing single value at some time in future
// with either resolved value or error
// states (pending, fulfilled, rejected)
// Used for async operations

// rules
/* 
A promise is an object that supplies a standard-compliant .then() method
A pending promise may transition into either fulfilled or rejected state
A fulfilled or rejected promise is settled and it must not transition into any other state.
Once a promise is settled, the value must not change. */

const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      console.log("this is a Promise");
    }, 5000);
  },
  (reject) => {}
).then((value) => console.log(value));

// Promise chaining
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  })
  .then(function (result) {
    console.log(result); // 24
    return result * 5;
  });

// promise all
/*
Promise.all is a promise that takes an array of promises
as an input (an iterable), and it gets resolved
when all the promises get resolved or any one of
them gets rejected. For example,
*/
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

// race method in promise return
// the promise instance which is firstly resolved
var promise5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise4, promise5]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise4 is faster
});
