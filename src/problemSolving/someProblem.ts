// Problem 1:

// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

function myFunction1(value: string | number): string | number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * value;
  } else {
    return "Invalid input!";
  }
}

const myInput = myFunction1("Web Developer"); // length - 13
const myInput2 = myFunction1(3); // square - 9
// console.log(myInput2);

// Problem 2:

// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

interface IAddress {
  city: string;
  street: string;
}

interface PersonA {
  address?: IAddress;
  phone?: number;
}

function getAddressCity(value: PersonA): string | undefined {
  return value?.address?.city;
}

const person1: PersonA = {
  address: {
    city: "New York",
    street: "Broadway",
  },
  phone: 234232,
};

const person2: PersonA = {
  phone: 4223232,
};

const myCity = getAddressCity(person1);
// console.log(myCity);
// console.log(getAddressCity(person2));

/* 
Problem 3:

Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

Problem 4:

You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

Problem 5:

Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

Problem 6:

Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

Problem 7:

Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

// Example usage:

const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "cherry";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

const indexInStrings = findFirstOccurrence(strings, targetString);

console.log(indexInNumbers); //output:  1

console.log(indexInStrings); //output: 2


Problem 8:

Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

*/
