function Human(firstName, LastName) {
  this.firstName = firstName;
  this.LastName = LastName;
}

const member = new Human("Mohammad", "Harish");

// typeerror becoz fn is like a object and this key is nt accesible in memeber
// Human.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };
// console.log(member.getFullName());
Human.prototype.getFullName = function () {
  return this.firstName + " " + this.LastName;
};
console.log(member.getFullName());
