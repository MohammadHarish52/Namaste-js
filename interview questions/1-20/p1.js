function showData() {
  // undefined due to hoisted var is moved at the top of the function
  console.log("vraible name is " + name);
  // reference error  they are hoisted but their memory is allocated to tdz
  console.log("vraible age is " + age);
  var name = "Mohammad Harish";
  let age = 22;
}
showData();
