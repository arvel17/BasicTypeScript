// let username = "bellaciaw";
// console.log(username);

// let a = 5;
// let b = 8;
// let c = "4";

// console.log(b / c);

// let nama: string = "arvel";
// let umur: number;
// let pilih: boolean | number;
// let terserah: any; //boleh bebas pakai tipe data apa saja

// nama = "halo";
// umur = 20;
// pilih = true;
// terserah = "apapun tipedatanya";

// console.log(nama);

// const sum = (a: number, b: number) => {
//   return a + b;
// };

// let regular: RegExp = /\w+/g;
// console.log(regular);

//array
// let stringArrName = ["arvel", "neville", "michael"]; //stringArrName: string[]
// let stringArrAge = [20, 21, 20]; //stringArrAge: number[]
// let mixData = [2540131071, "arvel", true]; //mixData: (string | number | boolean)[]

// stringArrName.push("kelvin");
// console.log(stringArrName); //['arvel', 'neville', 'michael', 'kelvin']

// //Tuple
// let myTuple: [string, number, boolean] = ["arvel kartawijaya", 20, false];
// myTuple[0] = "arya yudha";
// console.log(myTuple); //['arya yudha', 20, false]

// //objects
// let myObj: object;
// myObj = [];
// console.log(typeof myObj);

// let mhs: object;
// mhs = {
//   nama: "arvel kartawijaya",
//   nim: 2540131071,
//   email: "arvel.kartawijaya@gmail.com",
// };

// type Person = {
//   //bisa pakai interface Person{}
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// let person: Person = {
//   name: "John",
//   age: 30,
//   isStudent: false,
// };

// const goodPerson = (good: Person) => {
//   if(good.name){
//     return `Hai ${good.name.toUpperCase()}`;
//   }
//   return 'Hello!'
// };
// console.log(goodPerson(person)); //Hai JOHN

// //Enums
// enum Grade{
//   U = 1, //default value nya 0
//   D = 2, //default value nya 1
//   C = 3, //default value nya 2
//   B = 4, //default value nya 3
//   A = 5  //default value nya 4
// }

//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;

//Literal types
let myName: "Dave";
let userName: "arvel" | "arvel2" | "arvel3";
userName = "arvel";

//functions
let substract = (a: number, b: number): number => {
  return a - b;
};

type mathFunction = (c: number, d: number) => number; //assign
let multiply: mathFunction = function (c, d) {
  //panggil
  return c * d;
};
