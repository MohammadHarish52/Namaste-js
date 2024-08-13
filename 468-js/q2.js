/// difference  between call,apply and bind in objects
const employee1 = { fname: "Harish", lname: "dj" };
const employee2 = { fname: "IFa", lname: "Zareen" };

function invite(greeting1) {
  console.log(` ${greeting1} ${this.fname} + " " +${this.lname}`);
  return 0;
}
// call adds the arg
console.log(invite.call(employee1, "Hello"));
console.log(invite.call(employee2, "Hello"));
// apply add the arg in arrays
console.log(invite.apply(employee1, ["Helloowee"]));
console.log(invite.apply(employee2, ["Hello"]));
// bind returns a new function
let inviteEmp1 = invite.bind(employee1);
let inviteEmp2 = invite.bind(employee2);

console.log(inviteEmp1("kese ho"));
console.log(inviteEmp2("how are u"));

// json operations
// string to object
// JSON.parse(text);
//  object to string
// JSON.stringify(object);
