// 204. Count Primes
// Medium
// Topics
// Companies
// Hint
// Given an integer n, return the number of prime numbers that are strictly less than n.

 

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

function countPrimes(n) {
    if (n <= 2) return 0;
  
    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime
  
    for (let i = 2; i * i < n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < n; j += i) {
          isPrime[j] = false; // Mark multiples of i as non-prime
        }
      }
    }
  
    return isPrime.reduce((count, prime) => count + prime, 0);
  }
  
  console.log(countPrimes(10)); // Output: 4
  console.log(countPrimes(20)); // Output: 8
  console.log(countPrimes(100)); // Output: 25
  
  