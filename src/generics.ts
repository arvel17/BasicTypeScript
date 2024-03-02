//generics
//console.log("hello");
const stringEcho = (arg: string): string => arg;
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  {
    if (Array.isArray(arg) && !arg.length) {
      return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
      return { arg, is: false };
    }
    return { arg, is: !!arg };
  }
};

function gabung<Tipe extends string | number>(a: Tipe, b: Tipe): Tipe {
  return a + b;
}

const hasil = gabung(10, 20); // Result is 30 (number type)
console.log(hasil);
const kata = gabung("Halo", " dunia!");
console.log(kata);

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolean = <T>(arg: T): BoolCheck<T> => {
  {
    if (Array.isArray(arg) && !arg.length) {
      return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
      return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
  }
};

interface HasID {
  id: number;
}
const processUser = <T extends HasID>(user: T): T => {
  return user;
};
