function getMessage() {
  throw "Hi belo";
}
function sayHello() {
  try {
    const data = getMessage();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

sayHello(); // Output: Hi belo
