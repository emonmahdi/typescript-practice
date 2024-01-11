# TypeScript Concepts, Qustions and Answer

### Installation and setup typescript in my machine

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

9. Then finally start the server

`npm start`

## Questions

1. What is typescript?
2. Why use typescript for creating application
3. How to benifit use typescript
4. TypeScript key features
5. Best practice of typescript?
6. Some problem solving typescript?
7. React TypeScript

## Concepts

### 1. Basic Types

1.1 Array and Tuples

1.2 Object, literals and optional types

1.3 Functions

1.4 Spread, Rest, Default Parameter and Destructuring

1.5 Type Alias and optional types

1.6 Union, Intersection and Enum types

1.7 Null, Unknown and Never types

1.8 Ternary operator, nullish coeslancing operator

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
