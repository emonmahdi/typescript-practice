// Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  create(item: T): void;
  update(item: T): void;
  delete(id: number): void;
}

class GenericRepository<T> implements Repository<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  getAll(): T[] {
    return this.items;
  }
  getById(id: number): T | undefined {
    return this.items.find((item: any) => item.id === id);
  }
  create(item: T): any {
    return this.items.push(item);
  }

  update(item: T): void {
    const index = this.items.findIndex(
      (existingItem: any) => existingItem.id === item
    );
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  delete(id: number): void {
    const index = this.items.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

interface User {
  id: number;
  name: string;
  age: number;
}

const userRepository = new GenericRepository<User>();

userRepository.create({ id: 1, name: "Emon Mahdi", age: 26 });
userRepository.create({ id: 2, name: "Arif", age: 28 });

const allUser = userRepository.getAll();
// console.log(allUser);

const user = userRepository.getById(2);
console.log(user);

// update
userRepository.update({ id: 1, name: "Md Emon Mahdi", age: 27 });
userRepository.delete(1);

console.log(allUser);
