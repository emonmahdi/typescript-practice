// amra neje theke jkn kono type bole debo setai type assertion. Typescript theke type na neye neje thke custom vabe set  kore deyai type assertion.

let versity: string;

versity = "university of global village";

(versity as string).length;

function kgToGram(params: string | number | undefined) {
  if (typeof params === "string") {
    const value = parseFloat(params) * 1000;
    return `The converted result is: ${value}`;
  } else if (typeof params === "number") {
    const value = params * 1000;
    return value;
  }
}

const resultToNumber = kgToGram(40) as number;
const resultToString = <string>kgToGram("50"); // same as top - this is call type assertion

type customError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as customError).message);
}
