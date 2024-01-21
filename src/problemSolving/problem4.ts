// Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

// normal function
function reverseArray<T>(array: T[]): T[] {
  const reverse = array.reverse();
  return reverse;
}

// arrow function
const reverseA = <T>(arr: T[]): T[] => {
  return arr.reverse();
};

const myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseA(myArr));
