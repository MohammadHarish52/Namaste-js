const obj = { 1: "A", 2: "B", 3: "C", 4: "D" };
const set = new Set([1, 2, 3, 4]);

console.log(obj.hasOwnProperty("1")); // true because keys are stored as strings
console.log(obj.hasOwnProperty(1)); // false

console.log(set.has(1)); // true

console.log(set.has("1")); // false because directly accessing the values
