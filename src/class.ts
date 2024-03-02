// class Coder {
//   secondLang!: string;
//   constructor(
//     public name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "Typescript"
//   ) {
//     (this.name = name),
//       (this.music = music),
//       (this.age = age),
//       (this.lang = lang);
//   }

//   public getAge() {
//     return `Hello, I'm ${this.age}`;
//   }
// }

// const arvel = new Coder("arvel", "mandarin", 20, "JavaScript");
// console.log(arvel.getAge());
// console.log(arvel.name);
// console.log(arvel["age"]); //akses property private

// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age); // karena extends
//     this.computer = computer;
//   }
//   public getLang() {
//     return `I write ${this.lang}`;
//   }
// }

// const arvel1 = new WebDev("windows", "arvel", "mandarin", 20);
// console.log(arvel1.getLang());

// interface Mucician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist implements Mucician {
//   name: string;
//   instrument: string;
//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string) {
//     return `${this.name} ${action} the ${this.instrument}`;
//   }
// }

// const Page = new Guitarist("neville", "guitar");
// console.log(Page.play("strums"));

// class Peeps {
//   static count: number = 0;
//   static getCount(): number {
//     return Peeps.count;
//   }

//   public id: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count;
//   }
// }

// const john = new Peeps("John");
// const stephen = new Peeps("Stephen");
// const jane = new Peeps("Jane");

// console.log(`${john.id} ${john.name}`);
// console.log(`${stephen.id}  ${john.name}`);

// //getter setter
// class Bands {
//   private dataState: string[];
//   constructor() {
//     this.dataState = [];
//   }

//   public get data(): string[] {
//     return this.dataState;
//   }

//   public set data(value: string[]) {
//     if (
//       Array.isArray(value) &&
//       value.every((element) => typeof element === "string")
//     ) {
//       this.dataState = value;
//       return;
//     } else throw new Error("bukan array of string");
//   }
// }

// const MyBand = new Bands();
// MyBand.data = ["arvel", "reyhan"];
// MyBand.data = [...MyBand.data, "kelvin"];
// console.log(MyBand.data);
