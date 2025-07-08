// using Heron's formula
let height = 5;
let width = 6;
let length = 7;

let s = (height + width + length)/2;
// console.log(s);

let area = Math.sqrt(s * ((s -height) * (s-width) * (s-length)));
console.log(area)

