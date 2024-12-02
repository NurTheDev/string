/**
 * Problem 1
 * Capitalize Every first Letter of each word in a String
 */
//
//
let str =
  "Learning JavaScript is fun because it allows you to create dynamic web applications and explore exciting programming concepts effortlessly.";
// let newStr = "";
// for (let i of str) {
//   if (i === "i") {
//     i = "I";
//   }
//   newStr += i;
// }
// console.log(newStr.includes("I"));

let eachWord = str.split(" ");
let news = eachWord.map((value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});
console.log(news.join(" "));
