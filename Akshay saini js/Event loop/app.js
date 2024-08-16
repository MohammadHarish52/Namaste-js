console.log("start");

// js executes the code in the call stack in something known as execution context
// until and unless all the tasks that are in the call stack are executed
// it doesn't push the things from the callback queue to the call stack by event loop
// so a simple timer may take  some time before it gets pushed into the call stack

setTimeout(() => {
  console.log("timer");
}, 3000);

console.log("end");

// blocking the main thread
// hence never block the main thread and hence we use asynchronous js

let start = new Date().getTime();
let end = new Date().getTime();
while (end < start + 10000) {
  end = new Date().getTime();
}
console.log("Ruk 10 second");
