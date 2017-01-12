
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var pythagorean = function(input){
  calculated = Math.sqrt(Math.pow(input.x, 2) + Math.pow(input.y, 2));
  return calculated;
};

var result = input.map(pythagorean);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
