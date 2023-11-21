// ekta type er upor depends kore r ekta type howa keyof bole

// resource link: https://backbencher.dev/generics-keyof-constraint-typescript#:~:text=keyof%20constraint%20in%20TypeScript%20generics,a%20key%20of%20another%20object.&text=After%20that%20we%20are%20calling,does%20not%20throw%20an%20error.

type studentInfo = {
  name: string;
  roll: number;
  subject: string;
};

type newType = "name" | "roll" | "subject";

type newStudent = keyof studentInfo;

// keyof constraints

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const resultProperty = getProperty({ name: "Md Emon", age: 26 }, "age");
// ei khane ekta object er opor depend kore age string argument debe jodi object er moddhe sei key na thke tahole error debe.
