// Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function arraySum(arr: number[]): number {
  let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  for (let ar of arr) {
    sum += ar;
  }

  return sum;
}

const myNum: number[] = [1, 3, 4, 5];
const result: number = arraySum(myNum);
console.log(result);
