class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// create instance add value the Person Class
const p1 = new Person("Jalil Mia", 28);
// console.log(p1);

// inheritance -- onner boisisto k nejer moddhe neye neyai hosse inheritance
// Parent Class
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`My Name is ${this.name} and Age is ${this.age}`);
  }
}

// childe class
class Person2 extends Person1 {
  salary: number;
  position: string;

  constructor(name: string, age: number, salary: number, position: string) {
    super(name, age);
    this.salary = salary;
    this.position = position;
  }

  show() {
    console.log(`My Name is ${this.name} and Age is ${this.age}`);
  }
}

// make instance
const p2 = new Person2("Mahdi", 26, 20000, "developer");
console.log(p2);
