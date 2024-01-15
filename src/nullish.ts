// check the value null or undefined

const someInput: unknown = 43;
const outputNullish = someInput ?? "No input";
console.log(outputNullish);

// null - default value
// undefined - default value
// "" - empty string
// true - true
// false - false
// 'emon' - emon

const anotherCheck = null ?? "default value";
console.log(anotherCheck);

// when input any value without null or undefined then show this result. ?? is nullish sign.
