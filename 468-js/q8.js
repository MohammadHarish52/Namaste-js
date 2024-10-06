let user = {
  name: "DON ELDERADO",
  age: 89,
};

// delete operator is used to delete the property of an object and not the object as an whole
console.log(delete user.name);
console.log(delete user);

// -----
console.log(typeof user);
console.log(typeof 1);
console.log(typeof [1, 2, 3]);
console.log(typeof "1");

// The undefined property indicates that a variable has not been assigned a value,
// or declared but not initialized at all. The type of undefined value is undefined too.

var user2; // Value is undefined, type is undefined
console.log(typeof user2); //undefined

// The value null represents the intentional absence of any object value.
// It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.

var user1 = null;
console.log(typeof user1); //object
