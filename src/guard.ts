// of guard
type typeOfData = string | number;

const doSomething = (a: typeOfData): typeOfData => {
  if (typeof a === "number") {
    return a;
  }
  return a;
};

// console.log(doSomething(33));
// console.log(doSomething("Amin"));

// in guard

type X = {
  name: string;
  position: string;
};

type Y = {
  name: string;
  age: number;
  salary: string;
};

const getInfo = (info: X | Y) => {
  if ("position" in info) {
    return `My Position is ${info.position}`;
  } else if ("salary" in info) {
    return `My salary is ${info.salary}`;
  }
};

// instance of guard

class P {
  salary: number;
  position: string;

  constructor(salary: number, position: string) {
    this.salary = salary;
    this.position = position;
  }

  showPosition() {
    console.log(`Position: ${this.position}`);
  }
}

class Q extends P {
  constructor(salary: number, position: string) {
    super(salary, position);
  }

  showSalary() {
    console.log(`Salary: ${this.salary}`);
  }
}

class R extends P {
  constructor(salary: number, position: string) {
    super(salary, position);
  }

  showSalaryWithPosition() {
    console.log(`Salary: ${this.salary} and Position: ${this.position}`);
  }
}

function findInstance(person: P) {
  if (person instanceof Q) {
    person.showPosition();
  } else if (person instanceof R) {
    person.showSalaryWithPosition();
  }
}

const p4 = new Q(30000, "developer");
const p5 = new R(30000, "developer");
p5.showSalaryWithPosition();
console.log(p5);

// note: kono class thke jokn kono method e alada korar doker hoy tkn instanceof guard use kora hoy
