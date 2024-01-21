// Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface Person {
  name: string;
  age: number;
  email: string;
}

const FirstPerson: Person = {
  name: "Md Emon mahdi",
  age: 26,
  email: "emonhowlader1397@gmail.com",
};
console.log(FirstPerson.name);
console.log(FirstPerson.age);
console.log(FirstPerson.email);
