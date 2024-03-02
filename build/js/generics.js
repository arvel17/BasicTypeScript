"use strict";
//generics
//console.log("hello");
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const isTrue = (arg) => {
    {
        if (Array.isArray(arg) && !arg.length) {
            return { arg, is: false };
        }
        if (isObj(arg) && !Object.keys(arg).length) {
            return { arg, is: false };
        }
        return { arg, is: !!arg };
    }
};
function gabung(a, b) {
    return a + b;
}
const hasil = gabung(10, 20); // Result is 30 (number type)
console.log(hasil);
const kata = gabung("Halo", " dunia!");
console.log(kata);
const checkBoolean = (arg) => {
    {
        if (Array.isArray(arg) && !arg.length) {
            return { value: arg, is: false };
        }
        if (isObj(arg) && !Object.keys(arg).length) {
            return { value: arg, is: false };
        }
        return { value: arg, is: !!arg };
    }
};
const processUser = (user) => {
    return user;
};
