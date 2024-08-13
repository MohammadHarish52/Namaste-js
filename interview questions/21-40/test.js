var str1 = "hey";
var str2 = "hey";

console.log(str1 == str2); // true
console.log(str1 === str2); // true

var str3 = new String("hey");
var str4 = new String("hey");

console.log(str3 == str4); // false
console.log(str3 === str4); // false

var obj1 = {};
var obj2 = {};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

var arr1 = [];
var arr2 = [];

console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false

// -------

var obj = {
  a: {
    b: 1,
  },
};

var a = obj.a;
var b = obj.a.b;

obj.a = {
  b: 11,
};

console.log(a); // a = {b:11}
console.log(b); // b =1

b = 111;
console.log(obj.a.b); // 1

var makeApiCall = async (id) => {
  // call https://groweasy.ai/users/:id
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

async function fun() {
  var id = 1;
  let result = await makeApiCall(id);
  // print result
  console.log(result);
}

fun();
