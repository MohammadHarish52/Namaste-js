// diffrent ways of creating objects
// 1
let user = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

console.log(user);

// 2 . constructor function
let user2 = new Object();
console.log(user2);

// 3 . create method

let user3 = Object.create(null);

console.log(user3);

// 4 . fucntion constructor

function userObj(age, company) {
  this.age = age;
  this.company = company;
}

const user4 = new userObj(21, "Atlassian");
console.log(user4);

// function constructor with prototype

function Person() {}
Person.prototype.name = "Harish";
var object = new Person();

// object assign method

const user5 = Object.assign({ height: "6'2" }, user);
console.log(user5);
