// The eval() function evaluates JavaScript code represented as a string
console.log(eval("1+2"));
console.log(eval("1-2"));
console.log(eval("1*12"));
console.log(eval("10/2"));

// isNaN
console.log(isNaN(false));

// diff between window and document
// window is the baaap and document is the direct launda
//  hsitory in js
// function goBack() {
//   window.history.back();
// }
// function goForward() {
//   window.history.forward();
// }

// infinite fn isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(100); // true

// Top to Bottom(Event Capturing)
// Bottom to Top (Event Bubbling)
