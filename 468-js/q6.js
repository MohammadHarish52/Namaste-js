// What is an IIFE .
// A fucntion that returns as soon it is declared,

(function greet() {
  let message = "kese ho bhai";
  console.log(message);
})();

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri);
console.log(decoded_uri);
