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
```

##### unknown Type:

The unknown type is a type-safe counterpart of any. It is a type that represents values about which you have little or no information. Unlike any, you cannot perform arbitrary operations on values of type unknown without first asserting or narrowing the type.

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
```

### 2. Advanced

2.1 Type Assertion

2.2 Interface, Type vs Interface

2.3 Introduction of Generic in type

2.4 Generic in Interface

2.5 Generic in Function

2.6. Constraints generics

2.7 Generic constraints using keyof

2.8 Asynchronous typescript

2.9 Conditional Types

2.10 Mapped Types
