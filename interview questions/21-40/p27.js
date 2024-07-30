const num = [1, 2, 3];
num[10] = 9;
console.log(num); // [ 1, 2, 3, <7 empty items>, 9 ]
console.log(num[8]); // undefined
