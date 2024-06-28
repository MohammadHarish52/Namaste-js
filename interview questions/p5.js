// mutable nature of js objects
let a = { name: "Ishita" };
let b = { ...a };
// helps no to change the original object also object.assign can be used

b.name = "Harish";

console.log(a); // { name: "Ishita" }
// this happens beacause object are reference types
