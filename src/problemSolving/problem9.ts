// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

interface Carr {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

function combineCarAndDriver(
  car: Carr,
  driver: Driver
): { car: Carr; driver: Driver } {
  return {
    car: car,
    driver: driver,
  };
}

// use Car
const myCar: Carr = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};
console.log(myCar);

// use Driver
const myDriver: Driver = {
  name: "Amir Ali",
  licenseNumber: 2342342,
};
console.log(myDriver);
