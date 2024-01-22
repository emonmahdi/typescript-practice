// Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[] {
  let predicateArr: T[] = [];

  for (const element of arr) {
    if (predicate(element)) {
      predicateArr.push(element);
    }
  }
  return predicateArr;
}

// number
const numberss = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = filterArray(numberss, (num) => num % 2 == 0);
console.log(evenNumbers);

// for string
const myStringFriend = ["abrar", "hosen", "hafizur Rahman", "deloyer"];
const longNames = filterArray(myStringFriend, (names) => names.length > 6);
console.log(longNames);
