function myNumber(num1: number, num2: number) {
  return num1 + num2;
}

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
