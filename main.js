let str = "i am testing my basic things";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
let count = 0;
for (let arr of str) {
  //   console.log(arr);
  if (arr === "a") {
    let mo = arr;
    count++;
  }
  console.log(count + mo);
}
