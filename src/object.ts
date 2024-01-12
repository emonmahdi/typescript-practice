const details: {
  name: string;
  readonly age: number;
  job: string;
  isMarried?: boolean;
  friends: string[];
} = {
  name: "Arif",
  age: 28,
  job: "Trainer",
  isMarried: true,
  friends: ["emon", "rahat", "arif"],
};

// details.age = 33;
// console.log(details);

// destructuring

const { job } = details;

console.log(job);
