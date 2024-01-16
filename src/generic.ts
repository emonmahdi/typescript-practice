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

// tuple in generic

type MyTupleGeneric<X, Y, Z> = [X, Y, Z];

const firstTuple: MyTupleGeneric<string, string, number> = ["ab", "result", 34];
const secondTuple: MyTupleGeneric<number, boolean, string> = [
  34,
  true,
  "habib",
];

// generic function

const paramFunc = <P, Q>(param1: P, param2: Q): P => {
  console.log(`param ${param1} and ${param2}`);
  return param1;
};

paramFunc<string, number>("emon", 27);
// paramFunc<string, string>("emon", "developer");
// paramFunc<number, boolean>(123, false);
// paramFunc<string, object>("Admin", { name: "jalil", age: 28 });

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

// keyof
type MovieType = {
  name: string;
  category: string;
  duration: number;
};

// type namesF = "abir" | "rahat" | "arif";
// const myTest:namesF = 'rahat'

type MyMovieType = keyof MovieType; // 'name' | 'category' | 'duration'
const resultM: MyMovieType = "category";
