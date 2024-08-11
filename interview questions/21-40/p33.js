const ar = [1, 2, 3];

console.log(
  ar.map((num) => {
    if (num > 0) return;
    return num * 2;
  })
); // ["undefined", "undefined", "undefined]

console.log(ar); // [1, 2, 3] no change in array because map returns a new array
