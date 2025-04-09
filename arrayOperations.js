let arr = [`a`, `b`, `c`, `d`, `e`];

// accessing the elements
console.log(arr[1]);

// add an element to the end of the array
arr.push(`f`); 
console.log(arr); 

// check if an element exists in the array
console.log(arr.includes(`c`));

// how to find the last element of an array
console.log(arr[arr.length - 1]);
//how to find the first element of an array
console.log(arr[0]);
// how to find the middle element of an array
console.log(arr[Math.floor(arr.length / 2)]);
// how to find the index of an element in an array
console.log(arr.indexOf(`c`));
// how to remove an element from the array
console.log(arr.splice(arr.indexOf(`c`), 1)); // remove c from the array//1 is the number of items to be removed
console.log(arr);
// how to remove the last element from the array
console.log(arr.pop()); // remove the last element from the array   
console.log(arr);
// how to remove the first element from the array
console.log(arr.shift()); // remove the first element from the array
console.log(arr);
// how to add an element to the beginning of the array
console.log(arr.unshift(`a`)); // add a to the beginning of the array
console.log(arr);
// how to find the length of the array
console.log(arr.length);
// how to find the index of an element in the array
console.log(arr.indexOf(`c`)); // find the index of c in the array

// how to find the last index of an element in the array
console.log(arr.lastIndexOf(`c`)); // find the last index of c in the array
// how to find the index of an element in the array using findIndex method
console.log(arr.findIndex((item) => item === `c`)); // find the index of c in the array using findIndex method
// how to find the index of an element in the array using find method
console.log(arr.find((item) => item === `c`)); // find the index of c in the array using find method
// how to find the index of an element in the array using filter method
console.log(arr.filter((item) => item === `c`)); // find the index of c in the array using filter method
// how to find the index of an element in the array using map method
console.log(arr.map((item) => item === `c`)); // find the index of c in the array using map method  
// how to find the index of an element in the array using reduce method
console.log(arr.reduce((acc, item) => acc + (item === `c` ? 1 : 0), 0)); // find the index of c in the array using reduce method
// how to find the index of an element in the array using reduceRight method
console.log(arr.reduceRight((acc, item) => acc + (item === `c` ? 1 : 0), 0)); // find the index of c in the array using reduceRight method  
// how to find the index of an element in the array using some method
console.log(arr.some((item) => item === `c`)); // find the index of c in the array using some method
// how to find the index of an element in the array using every method
console.log(arr.every((item) => item === `c`)); // find the index of c in the array using every method