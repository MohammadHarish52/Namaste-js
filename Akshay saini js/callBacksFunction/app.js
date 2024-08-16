//callBack function in javascript
//callback is a function that is passed as an argument to another fn
//and called inside the parent function at some appropriate time.
// Example
function sayHello(name, callback) {
  console.log("Hello " + name);
}
sayHello("John", function () {
  console.log("How are you?");
});

setTimeout(() => {
  console.log("timer");
}, 2000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("i am y");
});

// closures and eventlistener

function attachEventListener() {
  let count = 0;
  document.getElementById("click_me").addEventListener("click", () => {
    console.log("button Clicked", ++count);
  });
}
attachEventListener();
