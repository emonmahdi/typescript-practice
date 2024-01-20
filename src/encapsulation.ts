class MyBank {
  id: number;
  private amount: number;
  name: string;

  constructor(id: number, amount: number, name: string) {
    this.id = id;
    this.amount = amount;
    this.name = name;
  }
}

const bank = new MyBank(12, 30000, "Md Emon Mahdi");
// const amountCheck = bank.amount;
console.log(bank);
// console.log(amountCheck);

// note: If i use the private any property then that property are encapsulated not the access the property
