// Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

function calculateArea(length: number, width: number): number {
  const area = length * width;
  return area;
}

const lengths: number = 10;
const width: number = 8;
console.log(calculateArea(lengths, width));
