// Given an array, return the sum of numbers that are 18 or over.
const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
let over = arr.reduce((acc, el) => {
  if (el >= 18) {
    acc += el;
  }
  return acc;
});
console.log(over);

// - Write a function which calculates average age of users.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

let averageAge = (users) =>
  users.reduce((acc, el) => (acc += el.age), 0) / users.length;

console.log(averageAge(users));
