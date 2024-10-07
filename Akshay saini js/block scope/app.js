{
  var a = 10;
  // a is hoisted in the global scope space
  let b = 20;
  // b and c are hoisted inside the block scope and hence cannot be accesed outside of the scope
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
//block scope is no longer accessible and hence the reference error persists
console.log(b);
console.log(c);

//shadowing
var x = "global";
{
  var x = "block";
  console.log(x);
  //since they are pointing to the same memory location ie global scope
}
console.log(x);

//shadowing for let and const
const c = 10;
let y = "TDZ";
//they go inside a memory space temporal ded zone
{
  const c = 100;
  let y = "block";
  // value of this is stored here only
  console.log(y);
  console.log(c);
}
console.log(y);
console.log(c);

//illegal shadowing
let a = 20;
{
  var a = 10;
  console.log(a); // illegal
}
console.log(a);
//legal
var h = 6;
{
  let h = 9;
  console.log(h);
}
console.log(h);
