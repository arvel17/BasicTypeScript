// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

//solusi 1
// let year: HTMLElement | null;
// year = document.getElementById("year");

// let thisYear: string;
// thisYear = new Date().getFullYear().toString();

// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }

//solusi 2
// const year = document.getElementById("year") as HTMLSpanElement;
// const thisYear: string = new Date().getFullYear().toString();

// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }
