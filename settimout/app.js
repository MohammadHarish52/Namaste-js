function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
x();
// prints 6 five times because
// the loop finishes first and then the timeouts execute one by one after a second each
// it is pointing to the same memory and this is how var behaves
function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
y();
// prints the desired result because let is a block scope and points to different memory

//fix with var
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
    close(i); //giving new copy of i every time
  }
}
x();
