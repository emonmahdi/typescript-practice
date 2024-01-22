# TypeScript Concepts, Qustions and Answer

### Installation and setup typescript in my machine

0. Prerequisites: Ensure firstly install node.js and any code editor ex. vs code

1. Install typescript globally in Computer

`npm install -g typescript`

2. initialize tsconfig file

`tsc --init`

3. initialize package.json file

`npm init -y`

4. Install nodemon

`npm i -D nodemon`

5. Install ts node dev

`npm i ts-node-dev`

6. Then add script in package.json from ts-node-dev docs

`ts-node-dev --respawn --transpile-only src/index.ts`

7. Create src folder and index.ts file and dist folder in root file

8. Modify tsconfig.json file rootDir - /src and outDir - ./dist

9. Then finally start the server - `npm start` or `npx ts-node-dev --respawn src/fileName`

## Questions

#### 1. What is typescript?

#### 2. Why use typescript for creating application

#### 3. How to benefit use typescript

#### 4. TypeScript key features

#### 5. Best practice of typescript?

#### 6. Some problem solving typescript?

#### 7. React TypeScript

#### 8. Typescript types?

Build In Types: number, string, boolean, void, symbol, null and undefined
User defined types: array, enums, classes, interface

#### 9. Explain how the arrays work in TypeScript?

We use arrays to store values of the same type. Arrays are ordered and indexed collections of values. The indexing starts at 0, i.e., the first element has index 0, the second has index 1, and so on.

Here is the syntax to declare and initialize an array in TypeScript.

```tsx
let values: number[] = [];
values[0] = 10;
values[1] = 20;
values[2] = 30;

let values: number[] = [15, 20, 25, 30];

let values: Array<number> = [15, 20, 25, 30];
```

#### 10. What is any type, and when to use it?

There are times when you want to store a value in a variable but don’t know the type of that variable in advance. For example, the value is coming from an API call or the user input. The ‘any’ type allows you to assign a value of any type to the variable of type any.

```tsx
let person: any = "Foo";

// json may come from a third-party API
const employeeData: string = `{"name": "John Doe", "salary": 60000}`;

// parse JSON to build employee object
const employee: any = JSON.parse(employeeData);

console.log(employee.name);
console.log(employee.salary);
```

TypeScript assumes a variable is of type any when you don’t explicitly provide the type, and the compiler cannot infer the type from the surrounding context.

## Concepts

### 1. Basic Types

#### 1.1 Array and Tuples

##### Arrays:

Arrays are a collection of elements, and they can be of any data type. TypeScript supports arrays through the Array type or the shorthand syntax with square brackets [].

```ts
const district: string[] = ["dhaka", "barishal", "sylet"];
const myNumbers: number[] = [12, 4, 36];
const isMarry2: boolean[] = [false];
// not maintain serial type data and length
const heroInfo: (string | string | number | boolean)[] = [
  "Sakib Khan",
  "Actor",
  300,
  false,
  500000,
];
```

```tsx
// Declaration using Array type
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Declaration using shorthand syntax
let names: string[] = ["Alice", "Bob", "Charlie"];

// Accessing elements
let firstNumber: number = numbers[0];

// Modifying elements
numbers[2] = 10;

// Adding elements
numbers.push(6);

// Iterating through elements
for (let num of numbers) {
  console.log(num);
}
```

##### Tuples:

Tuples are similar to arrays, but they have a fixed number of elements, and each element can have a different data type. Tuples are defined using parentheses ().

```tsx
// maintain type and length
const myInfosDoc: [string, number, string, boolean] = [
  "Md Emon Mahdi",
  26,
  "Web Developer",
  false,
];

// Declaration of a tuple
let person: [string, number] = ["John", 30];

// Accessing elements
let name: string = person[0];
let age: number = person[1];

// Modifying elements
person[1] = 31;
```

#### 1.2 Object, literals and optional types

##### Objects:

In TypeScript, objects are used to represent structured data. You can define an object using the curly braces {} and specify the types for its properties.

```tsx
const details: {
  name: string;
  readonly age: number;
  job: string;
  isMarried?: boolean;
  friends: string[];
} = {
  name: "Arif",
  age: 28,
  job: "Trainer",
  isMarried: true,
  friends: ["emon", "rahat", "arif"],
};

// details.age = 33;   // readOnly property just use not do modify
// console.log(details);

// Object with specified types for properties
let person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
```

##### literals

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

```tsx
// Object literal with type inference
let personLiteral = {
  name: "Bob",
  age: 25,
};
// TypeScript infers the type as { name: string, age: number }
```

##### Optional Types:

You can make properties of an object optional by adding a ? after the property name. This allows you to create objects where certain properties may or may not be present.

```tsx
// Object with optional property
let user: { name: string; age?: number } = {
  name: "Charlie",
};
// 'age' property is optional
```

##### Combining Concepts:

```tsx
type Person = {
  name: string;
  age?: number;
  address?: {
    street: string;
    city: string;
  };
};

let john: Person = {
  name: "John",
  age: 28,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};
```

#### 1.3 Functions

##### Function Declaration:

You can declare a function using the function keyword. You can also specify the types for parameters and the return type.

```tsx
// normal function
function mySum(a: number, b: number): string {
  const result = a + b;
  return `result ${result}`; // string type return
}

// console.log(mySum(3, 5));

// arrow function
const mySumArrow = (c: number, d: number): number => {
  const result2 = c + d;
  return result2; // number type return
};

// console.log(mySumArrow(5, 6))

function add(x: number, y: number): number {
  return x + y;
}
```

##### Function Expression:

You can also define functions using function expressions.

```tsx
let multiply = function (a: number, b: number): number {
  return a * b;
};
```

##### Arrow Functions:

Arrow functions provide a more concise syntax for function expressions. They automatically capture the this value from the surrounding context.

```tsx
let divide = (a: number, b: number): number => a / b;
```

##### Optional and Default Parameters:

You can make parameters optional or provide default values.

```ts
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Example usage
let result1 = greet("Alice"); // Hello, Alice!
let result2 = greet("Bob", "Good morning"); // Good morning, Bob!
```

##### Function Types:

You can define types for functions, specifying the types for parameters and the return type. This allows you to enforce a specific function signature.

```ts
type MathOperation = (a: number, b: number) => number;

let addOperation: MathOperation = (x, y) => x + y;
let subtractOperation: MathOperation = (x, y) => x - y;
```

##### Callback Functions:

Functions can be passed as arguments to other functions, commonly used in callback scenarios.

```ts
function doSomethingAsync(callback: (result: string) => void): void {
  // Simulating an asynchronous operation
  setTimeout(() => {
    let result = "Operation completed";
    callback(result);
  }, 1000);
}

// Example usage
doSomethingAsync((result) => {
  console.log(result); // Operation completed
});
```

#### 1.4 Spread, Rest, Default Parameter and Destructuring

##### Spread Operator:

The spread operator (...) is used to spread the elements of an array or the properties of an object into another array or object.

##### Spread with Arrays:

```ts
// spread operator
const myFri = ["abir", "kabir", "rashid"];
const newFri = ["habib", "jamil", "rakib"];

myFri.push(...newFri); // newFri er value myFri te add hobe [] braket uthe jabe
console.log(myFri);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```

##### Spread with Objects:

```ts
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };

console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }
```

##### Rest Parameters:

You can use the rest parameter syntax (...) to capture multiple arguments into an array.

```ts
const myNums = (...nums: number[]): number => {
  let sum: number = 0;
  nums.map((n) => {
    sum = sum + n;
  });

  return sum;
};

myNums(12, 34, 5, 3, 1, 34, 56, 1);

// string
const myStr = (..strings: string[]): void => {
    strings.map(str => console.log(str))
}

// void use korbo jkn kono kisu return korar dorker hobe na tkn
myStr('Emon', 'Mahdi', 'web devloper')

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// Example usage
let total = sum(1, 2, 3, 4, 5); // 15

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

##### Default Parameter:

Default parameters allow you to specify default values for function parameters, which are used when the corresponding argument is not provided.

```ts
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Goodbye")); // Goodbye, Bob!
```

##### Destructuring:

Destructuring allows you to extract values from arrays or properties from objects and assign them to variables.

##### Destructuring Arrays:

```ts
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first, second, third); // 1 2 3

// destructuring
const myFri = ["abir", "kabir", "rashid"];
const newFri = ["habib", "jamil", "rakib"];

const [fri1, fri2, fri3] = myFri;
// abir, kabir, rashid
console.log(fri1, fri2, fri3);
```

##### Destructuring Objects:

```ts
const person = { name: "Alice", age: 30 };
const { name, age } = person;

console.log(name, age); // Alice 30
```

##### Destructuring Function Parameters:

```ts
function printPerson({ name, age }: { name: string; age: number }): void {
  console.log(`${name} is ${age} years old`);
}

const person = { name: "Bob", age: 25 };
printPerson(person); // Bob is 25 years old
```

#### 1.5 Type Alias and optional types

##### Type Alias:

A type alias allows you to create a named alias for a type. This is useful for defining complex types or for providing more descriptive names for existing types.

```ts
type PersonType = {
  name: string;
  age: number;
};

const singlePerson: PersonType = {
  name: "Masum Ahmed",
  age: 26,
};

type Point = {
  x: number;
  y: number;
};

const origin: Point = { x: 0, y: 0 };
```

In this example, Point is a type alias for an object with x and y properties.

##### Optional Types:

You can make a property optional in TypeScript by appending a ? to its name. This means that the property may or may not be present.

```ts
type Person = {
  name: string;
  age?: number; // Age is optional
};

const alice: Person = { name: "Alice" };
const bob: Person = { name: "Bob", age: 30 };
```

In the Person type, age is marked as optional. You can create objects of this type with or without the age property.

##### Combining Type Alias and Optional Types:

You can combine type aliases with optional types to create more complex and flexible structures.

```ts
type Address = {
  street: string;
  city: string;
  postalCode?: string; // Postal code is optional
};

type Person = {
  name: string;
  age?: number;
  address: Address;
};

const john: Person = {
  name: "John",
  address: { street: "123 Main St", city: "Anytown" },
};

const jane: Person = {
  name: "Jane",
  age: 25,
  address: { street: "456 Broad St", city: "AnotherTown", postalCode: "78901" },
};
```

Here, Address is a type alias with an optional postalCode, and Person uses this type along with an optional age property.

#### 1.6 Union, Intersection and Enum types

##### Union Types

In TypeScript we can assign multiple types to variables by using “Union Types”. We can define union types with the help of a pipe (“|”).

```ts
type Result = number | string;

function printResult(result: Result): void {
  console.log(result);
}

printResult(42); // Valid
printResult("Hello"); // Valid
// printResult(true);   // Error: Argument of type 'boolean' is not assignable to parameter of type 'Result'
```

##### Intersection Types:

Intersection types allow you to combine multiple types into one. The resulting type will have all the properties of the combined types.

```ts
type User = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  position: string;
};

type EmployeeWithUserInfo = User & Employee;

const employee: EmployeeWithUserInfo = {
  name: "Alice",
  age: 30,
  id: 123,
  position: "Developer",
};
```

##### Enum Types:

Enum types allow you to define a set of named constants. Enums make your code more readable and maintainable by giving friendly names to numeric values.

```ts
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;
console.log(myColor); // Output: 1

// You can also use enum values by name
let anotherColor: Color = Color.Blue;
console.log(anotherColor); // Output: 2
```

By default, enums are assigned numeric values starting from 0, but you can customize these values if needed.

```ts
enum Weekday {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let today: Weekday = Weekday.Wednesday;
console.log(today); // Output: 3
```

Enums provide a way to create more readable and self-documenting code by using meaningful names for constants.

#### 1.7 Null, Unknown and Never types

##### null Type:

The null type represents the intentional absence of any object value. It is a sub-type of all other types, meaning you can assign null to variables of any type.

```ts
let value: string | null = "Hello";
value = null; // Valid

const myFunc = (text: string | null): void => {
  if (text === null) {
    console.log("Text is null");
  }
};

myFunc(null);
```

##### unknown Type:

The unknown type is a type-safe counterpart of any. It is a type that represents values about which you have little or no information. Unlike any, you cannot perform arbitrary operations on values of type unknown without first asserting or narrowing the type.

Jokhon amra jani na user ki type er data debe se khetre unknown type use korbo.

```ts
let userInput: unknown = 5;

// You must perform a type check or assertion before using it as a specific type
if (typeof userInput === "string") {
  let strLength: number = userInput.length; // Valid
}
```

##### never Type:

The never type represents values that never occur. It is often used as the return type for functions that never return or for expressions that always throw exceptions.

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}
```

The never type is a subtype of all types, making it compatible with any other type. However, no value can be assigned to a variable of type never because there is no value that belongs to the never type.

```ts
let neverVariable: never;
// neverVariable = 5; // Error: Type '5' is not assignable to type 'never'
```

##### undefined Type:

It's also worth mentioning the undefined type, which represents a value that has not been initialized.

```ts
let value: number | undefined;
console.log(value); // undefined
```

#### 1.8 Ternary operator, nullish Coalescing operator

##### Ternary Operator:

The ternary operator is a concise way to express a conditional statement. It evaluates a condition and returns one of two values based on whether the condition is true or false.

```ts
let result: string = condition ? "True Result" : "False Result";
```

Example:

```ts
let isEven: boolean = 8 % 2 === 0;
let message: string = isEven ? "Number is even" : "Number is odd";
console.log(message); // Output: Number is even
```

##### Nullish Coalescing Operator:

The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined. It checks for null or undefined specifically and does not use the default value for falsy values like 0, false, or an empty string.

```ts
let value: string | null | undefined;

let result: string = value ?? "Default Value";
console.log(result); // Output: Default Value

// check the value null or undefined

const someInput: unknown = 43;
const outputNullish = someInput ?? "No input";
console.log(outputNullish);
```

### 2. Advanced

2.1 Type Assertion

```ts
// type assertion
// 3 ways to assertion
// as keyword
// <> - angel braket
// object use

// as keyword
const myInput: any = 3343.543;
const myResult: number = myInput as number;
console.log(myResult.toFixed(2));

// <>
const myInput2: any = "324323";
const myResult2: string = <string>myInput2;
console.log(myResult2.length);

// object
interface student {
  name: string;
  age: number;
}

const myResult3 = <student>{
  name: "Emon Mahdi",
  age: 26,
};
console.log(myResult3);
```

2.2 Interface, Type vs Interface

```ts

interface IDeveloper{
  name: string;
  age: number
}

const detailDev: IDeveloper = {
  name: 'Rahim';
  age: 29
}

```

Primitive type er data er jonno type use korbo
Object type er data er jonno interface use korbo.

2.3 Introduction of Generic in type

```ts
// generic
type myArrayGeneric<T> = Array<T>;

const myNumbersArray: myArrayGeneric<number> = [1, 2, 3, 4, 5, 6];
const myStringArray: myArrayGeneric<string> = ["ab", "bc", "cd", "ed"];
const myBooleanArray: myArrayGeneric<boolean> = [true, false, true, false];

type objType = {
  name: string;
  age: number;
};

const myObjectData: myArrayGeneric<objType> = [
  {
    name: "Emon mahdi",
    age: 26,
  },
  {
    name: "Hasan mahdi",
    age: 27,
  },
];
```

2.4 Generic in Interface

```ts
// generic in interface
interface IMe<T, U> {
  name: string;
  age: T;
  job: U;
}

const me: IMe<string, boolean> = {
  name: "Emon",
  age: "23 years",
  job: false,
};
```

2.5 Generic in Function

```ts
// generic function

const paramFunc = <P, Q>(param1: P, param2: Q): P => {
  console.log(`param ${param1} and ${param2}`);
  return param1;
};

paramFunc<string, number>("emon", 27);
// paramFunc<string, string>("emon", "developer");
// paramFunc<number, boolean>(123, false);
// paramFunc<string, object>("Admin", { name: "jalil", age: 28 });
```

2.6. Constraints generics

2.7 Generic constraints using keyof

```ts
// keyof
type MovieType = {
  name: string;
  category: string;
  duration: number;
};

const dataMovie: MovieType = {
  name: "hero the star",
  category: "action",
  duration: 2.3,
};

// type namesF = "abir" | "rahat" | "arif";
// const myTest:namesF = 'rahat'

type MyMovieType = keyof MovieType; // 'name' | 'category' | 'duration'
const resultM: MyMovieType = "category";
console.log(dataMovie[resultM]); // action
```

2.8 Asynchronous typescript

2.9 Conditional Types

```ts
type TypeA = number;
// type TypeB = TypeA extends string ? string : null;

type TypeC = string;
type TypeD = boolean;

type TypeE = TypeA extends string
  ? string
  : TypeC extends string
  ? string
  : null;
```

2.10 Mapped Types

```ts
// Definition: Jokn kono property k map kore every single data powa jabe setar upor jokn ekta kisu apply kora hobe jmn readOnly tkn seta r sob gulor upor ber ber lekher dorker hobe na.

type friendsList = {
  friend1: string;
  friend2: string;
  friend3: string;
  friend4: string;
};

type readOnlyFriendList = {
  readonly [key in keyof friendsList]: friendsList[key];
  // friend1
  // friend2
  // friend3
  // friend4
};

const listOfFriends: readOnlyFriendList = {
  friend1: "Abir",
  friend2: "Hafiz",
  friend3: "Nayem",
  friend4: "Jalil",
};
// listOfFriends.friend2 = "Arifur Rahman"; // if i can readOnly then i do not change the value
console.log(listOfFriends);

// another example:

type OriginalTypes = {
  name: string;
  age: string;
  isJob: boolean;
};

type MappedTypes = {
  [key in keyof OriginalTypes]?: OriginalTypes[key];
};

const newMappedObject: MappedTypes = {
  name: "Alam",
  age: "30",
  // isJob: false
};
```

2.11 OOP in typescript

#### Class

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// create instance add value the Person Class
const p1 = new Person("Jalil Mia", 28);
// console.log(p1);
```

#### inheritance

```ts
// inheritance -- onner boisisto k nejer moddhe neye neyai hosse inheritance
// Parent Class
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`My Name is ${this.name} and Age is ${this.age}`);
  }
}

// childe class
class Person2 extends Person1 {
  salary: number;
  position: string;

  constructor(name: string, age: number, salary: number, position: string) {
    super(name, age);
    this.salary = salary;
    this.position = position;
  }

  show() {
    console.log(`My Name is ${this.name} and Age is ${this.age}`);
  }
}

// make instance
const p2 = new Person2("Mahdi", 26, 20000, "developer");
console.log(p2);
console.log(p2.show());
```

#### Polymorphism

```ts
// ekta common jinis ek ek time e ek ek vabe behave kore setai polymorphism

class Department {
  showName(): void {
    console.log("Default Department");
  }
}
class Computer extends Department {
  showName(): void {
    console.log("Computer Department");
  }
}
class Civil extends Department {
  showName(): void {
    console.log("Civil Department");
  }
}

function show(param: Department) {
  param.showName();
}

const dp = new Department();
const cmt = new Computer();
const cvl = new Civil();

show(dp);
show(cmt);
show(cvl);
```

#### Abstaction:

```ts
abstract class Car {
  abstract start(): void;
  abstract stop(): void;
}

class MyCar extends Car {
  start(): void {
    console.log("My car starting..");
  }
  stop(): void {
    console.log("My car stoping..");
  }
}

const car1 = new MyCar();
car1.start();

// Note: Abstraction holo implementation k hide kore. abstract class er instance kora jay na.  eta k bahir theke keo control korte parbe na
```

#### Encapsulation

```ts
class MyBank {
  id: number;
  private amount: number;
  name: string;

  constructor(id: number, amount: number, name: string) {
    this.id = id;
    this.amount = amount;
    this.name = name;
  }
}

const bank = new MyBank(12, 30000, "Md Emon Mahdi");
// const amountCheck = bank.amount;
console.log(bank);
// console.log(amountCheck);

// note: If i use the private any property then that property are encapsulated not the access the property
```

2.12 Type Guard

There are three type guard in typescript

1. of guard using typeof
2. in guard using in keyword
3. instanceof guard using instanceof keyword

#### typeof

```ts
// of guard
type typeOfData = string | number;

const doSomething = (a: typeOfData): typeOfData => {
  if (typeof a === "number") {
    return a;
  }
  return a;
};

console.log(doSomething(33));
console.log(doSomething("Amin"));
```

#### in guard

```ts
// in guard

type X = {
  name: string;
  position: string;
};

type Y = {
  name: string;
  age: number;
  salary: string;
};

const getInfo = (info: X | Y) => {
  if ("position" in info) {
    return `My Position is ${info.position}`;
  } else if ("salary" in info) {
    return `My salary is ${info.salary}`;
  }
};
```

#### instanceof guard

```ts
// instance of guard

class P {
  salary: number;
  position: string;

  constructor(salary: number, position: string) {
    this.salary = salary;
    this.position = position;
  }

  showPosition() {
    console.log(`Position: ${this.position}`);
  }
}

class Q extends P {
  constructor(salary: number, position: string) {
    super(salary, position);
  }

  showSalary() {
    console.log(`Salary: ${this.salary}`);
  }
}

class R extends P {
  constructor(salary: number, position: string) {
    super(salary, position);
  }

  showSalaryWithPosition() {
    console.log(`Salary: ${this.salary} and Position: ${this.position}`);
  }
}

function findInstance(person: P) {
  if (person instanceof Q) {
    person.showPosition();
  } else if (person instanceof R) {
    person.showSalaryWithPosition();
  }
}

const p4 = new Q(30000, "developer");
const p5 = new R(30000, "developer");
p5.showSalaryWithPosition();
console.log(p5);

// note: kono class thke jokn kono method e alada korar doker hoy tkn instanceof guard use kora hoy
```

## Problem Solving Typescript

### 1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

#### Solution:

```ts
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
```

### 2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

#### Solution:

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

const FirstPerson: Person = {
  name: "Md Emon mahdi",
  age: 26,
  email: "emonhowlader1397@gmail.com",
};
console.log(FirstPerson.name);
console.log(FirstPerson.age);
console.log(FirstPerson.email);
```

#### 3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

#### Solution:

```ts
function calculateArea(length: number, width: number): number {
  const area = length * width;
  return area;
}

const lengths: number = 10;
const width: number = 8;
console.log(calculateArea(lengths, width));
```

#### 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

#### Solution:

```ts
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
```

#### 5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

#### Solution:

```ts
interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  create(item: T): void;
  update(item: T): void;
  delete(id: number): void;
}

class GenericRepository<T> implements Repository<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  getAll(): T[] {
    return this.items;
  }
  getById(id: number): T | undefined {
    return this.items.find((item: any) => item.id === id);
  }
  create(item: T): any {
    return this.items.push(item);
  }

  update(item: T): void {
    const index = this.items.findIndex(
      (existingItem: any) => existingItem.id === item
    );
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  delete(id: number): void {
    const index = this.items.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

interface User {
  id: number;
  name: string;
  age: number;
}

const userRepository = new GenericRepository<User>();

userRepository.create({ id: 1, name: "Emon Mahdi", age: 26 });
userRepository.create({ id: 2, name: "Arif", age: 28 });

const allUser = userRepository.getAll();
// console.log(allUser);

const user = userRepository.getById(2);
console.log(user);

// update
userRepository.update({ id: 1, name: "Md Emon Mahdi", age: 27 });
userRepository.delete(1);

console.log(allUser);
```

#### 6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

#### Solution:

```ts
type Coordinates = {
  latitude: number;
  longitude: number;
};

const locations: Coordinates = {
  latitude: 43.232,
  longitude: -23.3232,
};

console.log(locations);
```

#### 7. Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

#### Solution:

```ts
enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function printColorMessage(color: Color) {
  switch (color) {
    case Color.Red:
      console.log("You are selected Red");
      break;
    case Color.Green:
      console.log("You are selected Green");
      break;
    case Color.Blue:
      console.log("You are selected Blue");
      break;
    default:
      console.log("unknown color select");
  }
}

const selectedColor = Color.Blue;
printColorMessage(selectedColor);
```

#### 8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

#### Solution:

```ts
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  calculateArea(): number {
    return this.height * this.width;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Test the classes
const rectangle = new Rectangle(20, 30);
console.log(rectangle.calculateArea());

const circle = new Circle(3);
console.log(circle.calculateArea());
```

#### 9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

#### Solution:

```ts
interface Carr {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

function combineCarAndDriver(
  car: Carr,
  driver: Driver
): { car: Carr; driver: Driver } {
  return {
    car: car,
    driver: driver,
  };
}

// use Car
const myCar: Carr = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};
console.log(myCar);

// use Driver
const myDriver: Driver = {
  name: "Amir Ali",
  licenseNumber: 2342342,
};
console.log(myDriver);
```

#### 10. Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

#### Solution:

```ts
function convertToUppercase(input: string | string[]): string | string[] {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (Array.isArray(input)) {
    return input.map((str) => str.toUpperCase());
  } else {
    throw new Error("Invalid input");
  }
}

// check string
const myStr = "Md Emon Mahdi";
console.log(convertToUppercase(myStr));

// check array
const myArray = ["abul", "Kabul", "sagor", "hasan"];
console.log(convertToUppercase(myArray));
```

#### 11. Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

#### Solution:

```ts
let myStrings: string | null = null;
myStrings = "Hi My Name is Mahdi" as string;
console.log(myStrings.length);
```

#### 12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

#### Solution:

```ts
function myFunctionData(input: unknown): void {
  if (typeof input === "string") {
    console.log(`This input is String: ${input}`);
  } else if (typeof input === "number") {
    console.log(`This input is Number: ${input}`);
  } else {
    console.log("Unknown input type");
  }
}

myFunctionData("Hello Typescript"); //This input is String: Hello Typescript
myFunctionData(29); // This input is Number: 29
myFunctionData(false); // Unknown input type
```

#### 13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

#### Solution:

```ts
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
```

#### 14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

#### Solution:

```ts
function performOperations(
  param1: string | number,
  param2: boolean | string[]
): void {
  if (typeof param1 === "string" && Array.isArray(param2)) {
    console.log("Performing Operations 1");
    console.log(`Param1: ${param1.toUpperCase()}`);
    console.log(`Param2: ${param2.length}`);
  }
  if (typeof param1 === "number" && typeof param2 === "boolean") {
    console.log("Performing Operations 2");
    console.log(`Param1: ${param1 * 2}`);
    console.log(`Param2: ${param2}`);
  } else {
    console.log("Invalid input parameter types");
  }
}

performOperations("Habibur Rahman", ["a", "b", "c", "d"]);
// performOperations(23, false);
// performOperations(23, ["a", "c", "a"]);
```

#### 15. Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

#### Solution:

```ts
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
```

## Interview Questions and Answer

### 1. Javascript দিয়েই তো আমরা সকল কাজ করতে পারি, তাহলে typescript ইউজ করার কারন কি?

#### Answer:

JavaScript একটি ডাইনামিক টাইপ ল্যাঙ্গুয়েজ যা হাইলেভেল এবং ডায়নামিক ফিচারস সম্পন্ন। এটি অনেকগুলি কাজের জন্য খুব উপযুক্ত হতে পারে, কিন্তু কিছু সময়ে প্রোজেক্টের স্কেল বা কোড মেনেজমেন্ট করা কঠিন হয়ে উঠতে পারে। এই সময়ে, TypeScript একটি ভাল বিকল্প হতে পারে।

কিছু কারণের মধ্যে:

স্ট্যাটিক টাইপিং: TypeScript স্ট্যাটিক টাইপিং সুপোর্ট করে, যা মানে কোডের মধ্যে ভ্যারিয়েবল, ফাংশন এবং অন্যান্য ইউজডেটাইমেন্টের টাইপ স্পেসিফিকেশন তৈরি করতে পারে। এটি কোডের মেইনটেনেবিলিটি বা সহজে ত্রুটি খুঁজে বের করতে সাহায্য করতে পারে এবং ডেভেলপারদের কোড বুঝতে সাহায্য করতে পারে।

ডেক্লারেটিভ কোডিং সাপোর্ট: TypeScript মডার্ন জাভাস্ক্রিপ্ট স্ট্যান্ডার্ডের বহু ফিচারস সপোর্ট করে এবং কোড রিডেবিলিটি বা মেইনটেনেবিলিটি বাড়াতে সাহায্য করে, যেগুলি অনেকগুলি প্রজেক্টে গুরুত্বপূর্ণ হয়ে আসে।

এক্সটেনসিভ ফিচারস: TypeScript জাভাস্ক্রিপ্টের এক্সটেনসিভ ফিচারসগুলি সমর্থন করে যেগুলি জাভাস্ক্রিপ্টে পূর্বানুভুত হয়নি। এগুলি ব্যবহার করতে সাহায্য করে টাইপস্যাফ ডিফিনিশন, জেনেরিক, এবং এডভান্সড স্ট্যাটিক টাইপিং এবং মডার্ন জাভাস্ক্রিপ্ট ফিচারসগুলি ব্যবহার করে।

টাইপ সেফিটি এবং একুরেসি: TypeScript টাইপিং ব্যবহার করতে সাহায্য করে ভুল এবং বাগ সহ্জে খুঁজে বের করতে সাহায্য করে, এটি আপনার কোডের সেফিটি এবং একুরেসি বাড়ায়।

ডকুমেন্টেশন: TypeScript কোডের ডকুমেন্টেশন সাপোর্ট করতে সাহায্য করতে পারে, যা বড় প্রোজেক্টে বুঝতে সাহায্য করতে পারে এবং নতুন ডেভেলপারদের জন্য একটি সাধারিত সুবিধা

JavaScript is a common query among developers. TypeScript offers many benefits over JavaScript, but the primary one is the static typing it adds to the language. This addition gives us more certainty over the code we write and helps reduce the number of bugs and issues that are created.

There are many reasons to use TypeScript but the primary motivator for a lot of developers is the increased error detection and handling capabilities that help us write more robust and maintainable code.

Typescript provides better tooling, code navigation, and compile-time checks, making it easier to maintain and scale larger projects. Also, typescript helps prevent certain types of bugs and improves code quality.

Ref:

1. `https://itjet.io/blog/what-is-typescript`
2. `https://startup-house.com/blog/benefit-of-typescript`
3. `https://prismic.io/blog/what-is-typescript`

### 2. Generics কি, কিভাবে কাজ করে?

#### Answer:

জেনেরিক্স হচ্ছে টাইপস্ক্রিপ্টের এমন একটি ফিচার যার মাধ্যমে রি-ইউজেবল ফাংশন, ক্লাস, ইন্টারফেস সহ ছোট ছোট কোড কম্পোনেন্ট তৈরি করা যায়, যা আলাদা আলাদা ডাটা টাইপের জন্য কাজ করতে পারে।

একটি জেনেরিক ফাংশন এর বিশেষত্ব এই যে, জেনেরিক ফাংশন অন্যান্য টাইপের জন্য কার্যকর এবং রি-ইউজেবল। ফাংশন বা ক্লাসের নামের পর দুইটি Angle Bracket < > ব্যবহার করে টাইপ প্যারামিটার ডিফাইন করা যায়। এটিকে টাইপ ভ্যারিয়েবলও বলে।

any টাইপ ফাংশন আর্গুমেন্টে বিভিন্ন ডাটা টাইপ সমর্থন করলেও ফাংশনটি কি টাইপ রিটার্ন করবে সেটি আমরা জানি না বা নিয়ন্ত্রণ করতে পারি না। এটি জেনেরিক কন্সেপ্ট-এর নিয়ম লঙ্ঘন করে। এই কারণে সাধারণ কোন ফাংশনে any ব্যবহার করলে সেটি বিভিন্ন টাইপের জন্য রি-ইউজেবল হতে পারে কিন্তু সেটি জেনেরিক ফাংশন হবে না। কোডবেজ মেইন্টেইনেবিলিটির জন্য এটি খুবই গুরুত্বপূর্ণ। তাই জেনেরিক ফাংশনে আমরা টাইপ ভ্যারিয়েবল ( <T> ) ব্যবহার করি যা ভ্যারিয়েবলের মানের পরিবর্তে টাইপের ওপর কাজ করে।

```ts
function identity<T>(arg: Type): T {
   return arg;
}
```
Generics are a TypeScript feature that allows us to pass in various types of data and create reusable code to handle different inputs. They allow us to define placeholder types which are then replaced when the code is executed with the actual types passed in.

Generics are like a template that can be reused across the same piece of code multiple times but with the value being independent of each invocation of the function. Let’s look at an example to get a better understanding of this.

```ts
// 👇 We define a generic value called T with <T>
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['apple', 'banana', 'orange'];

// 👇 Note the generic values being passed in <number> & <string>
const firstNumber = getFirstElement<number>(numberArray);
const firstString = getFirstElement<string>(stringArray);
````

Ref:

1. `https://academy.vivasoftltd.com/typescript-bootcamp/generix/generic-function/`
2. `https://prismic.io/blog/typescript-generics`
