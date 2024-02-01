// let now = new Date();
// console.log(now);

// console.log(typeof now);
// console.log(String(now));

// console.log(Boolean(null));

let person = [
  { name: "bob", age: 30 },
  { name: "cindy", age: 18 },
];

let found = person.find((per) => per.age === 18);

found.name = "mike";

console.log(person);
