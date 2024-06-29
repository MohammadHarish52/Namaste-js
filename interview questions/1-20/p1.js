function showData() {
  // undefined due to hoisted var is moved at the top of the function
  console.log("vraible name is " + name);
  // refernce error in let they are in temporal dead zone
  console.log("vraible age is " + age);
  var name = "Mohammad Harish";
  let age = 22;
}
showData();
