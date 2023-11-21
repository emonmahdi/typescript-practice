// ekta type er upor depends kore r ekta type howa keyof bole
//

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
