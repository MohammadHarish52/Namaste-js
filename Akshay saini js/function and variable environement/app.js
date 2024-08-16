let x = 1;
a(); // 9 will be printed from local memory space
// and after that the execution context for the
// a function will be removed from the stack
b(); // 99 will be printed from local memory space
// and after that the execution context for the
// b function will be removed from the stack
console.log(x); // since the value of x = 1 in local memory
// space and the earlier two exection context
//have already been deleted from the memory space
// the answer will be 1 taken from the local memory space

function a() {
  let x = 9;
  console.log(x);
}

function b() {
  let x = 99;
  console.log(x);
}
