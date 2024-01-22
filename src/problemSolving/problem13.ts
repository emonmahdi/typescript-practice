// Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

function firstElement<T extends number | string>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

// number input
const numbers: number[] = [12, 3, 45, 6, 4];
const resultNumber = firstElement(numbers);
console.log(resultNumber);

// string input
const strings: string[] = ["emon", "abir", "habib", "kader"];
const resultString = firstElement(strings);
console.log(resultString);
