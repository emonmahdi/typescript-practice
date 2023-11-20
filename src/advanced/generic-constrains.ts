// generic constrains holo - dynamic vabe Type set korar poreo force kore deya je ei data sara onno kisu deya jabe na setail constraints

interface Mandatory {
  name: string;
  age: number;
  salary: number;
}

const userInfoData = <T extends Mandatory>(myInfos: T) => {
  const girlName = "Nur Jahan";
  return myInfos;
};

const myInfos = {
  name: "Rakib",
  age: 39,
  salary: 3000,
  job: "developer",
};

const resultInfo = userInfoData(myInfos);
