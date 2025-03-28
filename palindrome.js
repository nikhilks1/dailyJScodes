function checkPalindrome(num) {
    let rev = num.toString().split("").reverse().join("");
    if (rev == num) {
        console.log(`${num} - This is a palindrome`);
    } else {
        console.log('This is not a palindrome');
    }
    console.log(num);
}

// Example usage:
checkPalindrome(121); // This is a palindrome

