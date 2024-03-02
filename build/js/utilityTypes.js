"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
let pointPart = {};
pointPart.x = 10;
let myCar = {
    make: "Ford",
    model: "Focus",
    mileage: 12000, //mileage harus ada
};
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
cats.boris;
const bob = {
    name: "Bob",
    // `Pick` hanya mempertahankan name, age & location hilang
};
const value = true;
const point = {
    x: 10,
    y: 20,
};
//readonly
// interface Person {
//   name: string;
//   age: number;
// }
// const person: Readonly<Person> = {
//   name: "Dylan",
//   age: 35,
// };
// person.name = "Israel";
// prog.ts(11,8): error TS2540: Cannot assign to 'name'
//because it is a read-only property.
