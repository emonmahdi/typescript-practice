// primitive type er data er jonno type use korbo
// Object type er data er jonno interface use korbo.

type userType = {
    name: string;
    age: number
}
// add some external type 
type  AddAnotherUserType = userType & {
    job: string
}

const ExtendUser : AddAnotherUserType ={
    name:'amin',
    age: 22, 
    job: 'Developer'
}

interface IUser  {
    name: string,
    age: number
}

// exetends for interface
interface extendIUser extends  IUser {
    role:  string
}

const newUser: extendIUser = {
    name: 'Hasan',
    age: 24,
    role: 'Teacher'
}

const persons: IUser ={
    name: 'Arif',
    age: 23
}

// type usecase  - string, number, boolean, function, array
// interface usecase - object

// function
type addNumberType = (num1: number, num2: number) => number
const addNumbers: addNumberType = (num1, num2) => num1 + num2 

// array 
type rollNumberType = string[]

interface IRollNumber {
    [index: number] : string
}

const rollNumber: IRollNumber = ['1','2','3']