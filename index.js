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

function capitolize(str){
    return str.toLowerCase().split(' ').map(function(word){
        return word[0].toUpperCase()+word.substring(1);
    })
    .join(' ');
}
const output = capitolize('racecar driver');
console.log(output);