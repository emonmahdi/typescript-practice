// Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

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
