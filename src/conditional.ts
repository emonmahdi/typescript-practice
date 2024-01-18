type TypeA = number;
// type TypeB = TypeA extends string ? string : null;

type TypeC = string;
type TypeD = boolean;

type TypeE = TypeA extends string
  ? string
  : TypeC extends string
  ? string
  : null;
