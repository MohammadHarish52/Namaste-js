function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are 18 years old");
  } else if (data === { age: 1 }) {
    console.log("You are 1 year old");
  } else {
    console.log("You are not 18 or 1 year old");
  }
}

checkAge({ age: 18 }); // Output: You are 18 years old
