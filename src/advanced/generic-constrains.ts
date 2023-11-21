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

type myInfosType = {
  name: string;
  age: number;
  salary: number;
  job: string;
};

const myInfos: myInfosType = {
  name: "Rakib",
  age: 39,
  salary: 3000,
  job: "developer",
};

const resultInfo = userInfoData<myInfosType>(myInfos);
