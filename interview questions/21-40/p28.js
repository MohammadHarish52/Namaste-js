(() => {
  let x, y; // Outer scope variables
  try {
    throw new Error();
  } catch (x) {
    // 'x' here is a new variable local to the catch block
    x = 1; // This 'x' is local to the catch block
    y = 2; // This modifies the outer 'y'
    console.log(x); // Logs 1 (local 'x')
  }
  console.log(x, y); // Logs 'undefined 2' (outer 'x' is still undefined, outer 'y' is 2)
})();
