function reverseNumber(num) {
  // Convert number to string, split into array, reverse, and join back
  const reversedString = num.toString().split("").reverse().join("");

  // Convert the reversed string back to a number
  const reversedNumber = parseInt(reversedString);

  return reversedNumber;
}

// Test the function
const originalNumber = 12345;
const reversed = reverseNumber(originalNumber);
console.log(reversed); // Output: 54321
