//closures
function x() {
  var a = 9;
  function y() {
    console.log(a); //  9 closure(x)
  }
  y();
}
x();

// Functions along with its lexical environment is  a closure

function z() {
  var b = 100;
  function x() {
    var a = 9;
    function y() {
      console.log(a, b); //  9 closure(x) 100 closure(z);
    }
    y();
  }
  x();
}
z();
