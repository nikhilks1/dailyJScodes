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
// how to find the unicode of a character in a string
console.log(str.charCodeAt(0)); // find the unicode of a character in a string
// how to find the length of the string
console.log(str.length);
// how to find the last index of an element in a string
console.log(str.lastIndexOf(`w`)); 
// how to find the substring of a string
console.log(str.substring(0, 5)); 
// how to find the substring of a string from a given index
console.log(str.substring(5));
// how to find the substring of a string from a given index to a given index
console.log(str.substring(5, 10));
// how to find the substring of a string from a given index to a given index with a step
console.log(str.substring(5, 10, 2)); // this will not work as substring does not take step as an argument
// how to find the substring of a string from a given index to a given index with a step
console.log(str.substring(5, 10).split(``).filter((_, i) => i % 2 === 0).join(``)); // this will work as we are using filter to get the even index elements
// how to find the substring of a string from a given index to a given index with a step using regex
console.log(str.substring(5, 10).match(/.{1,2}/g)); // this will work as we are using regex to get the even index elements      
// how to find the substring of a string from a given index to a given index with a step using regex and split
console.log(str.substring(5, 10).split(``).filter((_, i) => i % 2 === 0).join(``)); // this will work as we are using filter to get the even index elements     
// how to find the substring of a string from a given index to a given index with a step using regex and split and join
console.log(str.substring(5, 10).split(``).filter((_, i) => i % 2 === 0).join(``)); // this will work as we are using filter to get the even index elements