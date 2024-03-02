//utility types
//partial
interface Assignment {
  studentID: string;
  title: string;
  grade: number;
  verivied?: boolean;
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

//partial
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;

//required
interface Car {
  make: string;
  model: string;
  mileage?: number; //dibuat optional
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, //mileage harus ada
};

//record
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

//Record<string, number> is equivalent to index signature
//{ [key: string]: number }

// //omit
// interface Person {
//   name: string;
//   age: number;
//   location?: string;//optional
// }

// const bob: Omit<Person, 'age' | 'location'> = {
//   name: 'Bob'
//   // `Omit` menghapus property age dan location
// };

//pick
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Pick<Person, "name"> = {
  name: "Bob",
  // `Pick` hanya mempertahankan name, age & location hilang
};

//exclude
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;
// string tidak bisa dipakai

// //return type
// type PointGenerator = () => { x: number; y: number; };
// const point: ReturnType<PointGenerator> = {
//   x: 10,
//   y: 20
// };

//parameters
type PointPrinter = (p: { x: number; y: number }) => void;
const point: Parameters<PointPrinter>[0] = {
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
