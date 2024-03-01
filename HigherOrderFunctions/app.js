const radius = [2, 3, 4, 5, 6];

// bad code

// function calculateArea(radius) {
//   const area = [];
//   for (let i = 0; i < radius.length; i++) {
//     area.push(Math.PI * Math.pow(radius[i], 2));
//   }
//   return area;
// }

// const areas = calculateArea(radius);
// console.log(areas);

// function calculateCircumference(radius) {
//   const circumference = [];
//   for (let i = 0; i < radius.length; i++) {
//     circumference.push(Math.PI * Math.pow(radius[i], 2));
//   }
//   return circumference;
// }

// better code

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return Math.PI * 2 * radius;
};

const calc = function calculate(radius, logic) {
  const area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(logic(radius[i]));
  }
  return area;
};

const area_ans = calc(radius, area);
const circ_ans = calc(radius, circumference);

console.log("the area is", area_ans);
console.log("the circumference is", circ_ans);

//best approach
const area_map = radius.map(area);
console.log(area_map);
const circum_map = radius.map(circumference);
console.log(circum_map);
