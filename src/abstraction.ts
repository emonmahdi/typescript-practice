abstract class Car {
  abstract start(): void;
  abstract stop(): void;
}

class MyCar extends Car {
  start(): void {
    console.log("My car starting..");
  }
  stop(): void {
    console.log("My car stoping..");
  }
}

const car1 = new MyCar();
car1.start();

// Note: Abstraction holo implementation k hide kore. abstract class er instance kora jay na.  eta k bahir theke keo control korte parbe na
