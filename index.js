function palindromeChecker(word) {
    let palindrome = word.split('').reverse().join('')
    return palindrome === word;
    // if (word == palindrome) {
    //     return true;
    // } else {
    //     return false;
    // }
}
////////////////////////////////

function reverse(str) {
    // return str.split('').reverse().join('');
    let reverseString = '';
    for (let char of str) {
        reverseString = char + reverseString;
    }
    return reverseString;
}

///////////////////////////////////
const output = palindromeChecker('racecar');
console.log(output);