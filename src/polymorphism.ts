// ekta common jinis ek ek time e ek ek vabe behave kore setai polymorphism

class Department {
  showName(): void {
    console.log("Default Department");
  }
}
class Computer extends Department {
  showName(): void {
    console.log("Computer Department");
  }
}
class Civil extends Department {
  showName(): void {
    console.log("Civil Department");
  }
}

function show(param: Department) {
  param.showName();
}

const dp = new Department();
const cmt = new Computer();
const cvl = new Civil();

show(dp);
show(cmt);
show(cvl);
