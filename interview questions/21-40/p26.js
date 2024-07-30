function sayHi() {
  return (() => 0)();
  // (() => 0)();  return 0
}
console.log(typeof sayHi()); // number
console.log(typeof typeof 1); // string because typeof returns a number in string
