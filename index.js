function palindromeChecker(word) {
    let palindrome = word.split('').reverse().join('')
    return palindrome === word;
   
}
////////////////////////////////

function reverse(str) {
    return str.split('').reverse().join('');
    // let reverseString = '';
    // for (let char of str) {
    //     reverseString = char + reverseString;
    // }
    // return reverseString;
}

///////////////////////////////////

function capitolize(str) {
    return str.toLowerCase().split(' ').map(function (word) {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(' ');
}

////////////////////////////////

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');

        } else if (i % 5 === 0) {
            console.log('Buzz');

        } else {
            console.log(i);

        }

    }
}

//////////////////////////////////

let messyArray = [[1, 9, 3],[8, 5, 10],[15]];

function flatten(items) {
    const newArray = [];
    items.forEach(item => {
        if (Array.isArray(item)) {
            newArray.push(...flatten(item));
        } else {
            newArray.push(item)
        }
    });
    return newArray;
}

const answer = reverse('hello');
console.log(answer);