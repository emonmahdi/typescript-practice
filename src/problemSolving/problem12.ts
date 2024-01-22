// Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

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
