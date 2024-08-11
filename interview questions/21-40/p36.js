(() => {
  let x = (y = 10);
})();

console.log(typeof x); // undefined

console.log(typeof y); // number
