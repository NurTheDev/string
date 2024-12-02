const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
// count = Object.keys(student).length;
// console.log(Object.entries(student).length);
let count = 0;
for (let i in student) {
  if (student.hasOwnProperty(i)) {
    count++;
  }
}
// console.log(count);
let fun = (obj) => {
  return Object.keys(student).length;
};
// console.log(fun(student));
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (let i in myObject) {
  let keys = `Keys : ${i}`;
  let type = `type: ${typeof i}`;
  console.log(keys + " | " + type);
}
