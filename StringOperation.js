// string operations
let str = `hello world`;
// accessing the elements
console.log(str[1]);
// add an element to the end of the string
str += `!`;
console.log(str);
// check if an element exists in the string
console.log(str.includes(`c`));
// how to find the last element of a string
console.log(str[str.length - 1]);
// how to find the first element of a string
console.log(str[0]);
// how to find the middle element of a string
console.log(str[Math.floor(str.length / 2)]);
// how to find the index of an element in a string
console.log(str.indexOf(`l`));   