const rakamlar = [-5, 15, 22, -4, 45, 78, -25];

let toplam = 0;
for (let i = 0; i < rakamlar.length; i++) {
  toplam += rakamlar[i];
}
console.log(`TOPLAM: ${toplam}`);

const grades = [55, 77, 23, 48, 98, 100, 15];
const lessThan50 = [];
const equalBiggerThan50 = [];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 50) {
    lessThan50.push(grades[i]);
  } else {
    equalBiggerThan50.push(grades[i]);
  }
}
console.log(lessThan50);
console.log(equalBiggerThan50);

let smaller50 = [];
let bigger50 = [];

//! ****************** FOR IN *********************
for (let i in grades) {
  grades[i] < 50 ? smaller50.push(grades[i]) : bigger50.push(grades[i]);
}
console.log(smaller50);
console.log(bigger50);

//! ****************** FOR OF *********************
//? for of un farkı verdiğin değişken değerin kendisini döndürür bir dizi varsa o dizinin elemanlarını kendisine dıra sıra alır.
let sumOfGrades = 0;
for (let i of grades) {
  sumOfGrades += i;
}
console.log(`ORTALAMA: ${(sumOfGrades / grades.length).toFixed(2)}`);

const students = ["ahmet", "mehmet", "ali", "veli", "mehmet", "miles", "selim"];
// const nameInput = prompt("Type the name that you are looking for:");

// const findStudents = (name) => {
//   let counter = 0;
//   for (let student of students) {
//     //     if (student === name) {
//     //       counter += 1;
//     //     }
//     //   }
//     //   return counter;

//     student === name && counter++; //! "short circuit" condition state
//   }
//   return counter === 0
//     ? `${name} can not be found`
//     : `${counter} results found with name ${nameInput}`;
// };
// console.log(findStudents(nameInput.toLowerCase()));

//! ************** forEach() **************
//? forEach is a void (empty) function which means doesn't return anything

const prices = [150, 250, 300, 500];

let sum = 0;
prices.forEach((price) => (sum += price));
console.log(sum);

//! ************** map() **************
//? It allows to return a copy of or manipulated new array which means it returns a new array

let names = ["ahmet", "mehmet", "ali", "veli", "mehmet", "miles", "selim"];

const upperName = names.map((name) => name.toLocaleUpperCase());

console.log(names);
console.log(upperName);

//! ************* filter() *************
//? It makes same thing with map() except it can return specific items

const salaries = [5500, 8000, 6500, 9000, 10000, 150000, 25000];

const hugeSalaries = salaries.filter((salary) => salary >= 10_000);
console.log(hugeSalaries);
