// generics ekta reusable jinis. user jei type er data dey seta dhorar jonnoi generic use hoy.
// generic is type of variable. it's a dynamic type. That's why I can use any type of value of this data

// simple function
function myFunction(data: string | number | boolean) {
  console.log("Data: ", data);
}

myFunction("md emon mahdi");
myFunction(26);
myFunction(true);
// myFunction(null)
// myFunction(undefined)

// dynamic type function
function myData<T>(data: T) {
  console.log("my data: ", data);
}

myData("emon mahdi");
myData(26);
myData(false);
myData(null);
myData(undefined);
myData({ name: "arif", age: 23 });
myData([1, 2, 3, 6, 7, 8]);
myData("web developer");

// multiple parameter
function myInfo<X, Y>(data1: X, data2: Y) {
  console.log(data1, data2);
}
// you may pass to argument any type of data this is dynamic type data uses here.
myInfo("emnon", 26);
myInfo(false, "married");
myInfo([1, 2, 3], { name: "habib" });

// function generic

const createArray = (param: string): string[] => {
  return [param];
};

const createArrayGeneric = <T>(param: T): T[] => {
  return [param];
};
// if you can pass multiple parameter you can use.

const resultG = createArrayGeneric<string>("Bangladesh");
const resultB = createArrayGeneric<boolean>(false);
const resultN = createArrayGeneric<number>(12);
const resultO = createArrayGeneric<{ name: string }>({ name: "mahdi" });

// Interface generic
interface UserData<X, Y, T, S = 2000> {
  name: X;
  age: Y;
  data: T;
  salary?: S;
}

interface IData {
  status: number;
  message: string;
}

const userDynamic: UserData<string, number, IData, number> = {
  name: "Hasibul islam",
  age: 26,
  data: {
    status: 200,
    message: "successfully",
  },
  salary: 3000,
};

const userData2: UserData<number, string, boolean> = {
  name: 12,
  age: "29",
  data: false,
};

// summary: generic deye dynamic vabe jei kono type user er theke data neye use kora jay nirdisto kisu na deye user ja debe setai generic er maddhome bose jabe.
