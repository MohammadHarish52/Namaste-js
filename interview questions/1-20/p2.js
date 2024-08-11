// var i is moved to the top and hence last value of i is printed
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 1);
}
// let i is in TDZ and hence each value of i is printed
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 1);
}
