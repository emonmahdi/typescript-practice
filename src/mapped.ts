// Definition: Jokn kono property k map kore every single data powa jabe setar upor jokn ekta kisu apply kora hobe jmn readOnly tkn seta r sob gulor upor ber ber lekher dorker hobe na.

type friendsList = {
  friend1: string;
  friend2: string;
  friend3: string;
  friend4: string;
};

type readOnlyFriendList = {
  readonly [key in keyof friendsList]: friendsList[key];
  // friend1
  // friend2
  // friend3
  // friend4
};

const listOfFriends: readOnlyFriendList = {
  friend1: "Abir",
  friend2: "Hafiz",
  friend3: "Nayem",
  friend4: "Jalil",
};
// listOfFriends.friend2 = "Arifur Rahman"; // if i can readOnly then i do not change the value
console.log(listOfFriends);

type OriginalTypes = {
  name: string;
  age: string;
  isJob: boolean;
};

type MappedTypes = {
  [key in keyof OriginalTypes]?: OriginalTypes[key];
};

const newMappedObject: MappedTypes = {
  name: "Alam",
  age: "30",
  // isJob: false
};
