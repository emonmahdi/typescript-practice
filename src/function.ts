function myNumber(num1: number, num2: number) {
  return num1 + num2;
}

function mySum(a: number, b: number): string {
  const result = a + b;
  return `result ${result}`;
}

console.log(mySum(3, 5));

const mySumArrow = (c: number, d: number): number => {
  const result2 = c + d;
  return result2;
};

console.log(mySumArrow(5, 6));

// arrow function

const myArrNum = (num1: number, num2: number): number => num1 * num2;

// callback function
const arr = [1, 2, 4, 5, 6];

const newArray = arr.map((ele: number) => ele + ele);

// object - method

const person: {
  name: string;
  salary: number;
  addBalance(money: number): void; // void jodi kisu return na kore tkn use kora hoy
} = {
  name: "emon",
  salary: 10,
  addBalance(money: number) {
    console.log(`My extended salary is: ${this.salary} + ${money}`);
  },
};

// default parameter
function sum(first: number, second: number = 5) {
  return first + second;
}

console.log(sum(22, 10)); // default parameter set are second parameter not the first parameter

// spread operator
const myFri = ["abir", "kabir", "rashid"];
const newFri = ["habib", "jamil", "rakib"];

console.log(...newFri);

//rest parameter
const greetFri = (...fri: string[]): void =>
  fri.forEach((fr) => console.log(`Hi ${fr}`));

greetFri("abul", "habib", "jasim", "asif", "joynal", "hossen");
