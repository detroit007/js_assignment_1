let string1 = "abcde";
let string2 = "abcdef";

// • Tests for equality and inequality with strings

console.log("string1 !== string2 | perdiction true");
console.log(string1 !== string2);

console.log("string1 === string2 | perdiction false");
console.log(string1 === string2);

// • Tests using the lower case function

console.log("string1 !== string2 | perdiction true");
console.log(string1.toLowerCase() !== string2.toLowerCase());

console.log("string1 === string2 | perdiction false");
console.log(string1.toLowerCase() === string2.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let a = 5;
let b = 10;

console.log("a !== b | perdiction true");
console.log(a !== b);

console.log("a === b | perdiction false");
console.log(a === b);

console.log("a < b | perdiction true");
console.log(a < b);

console.log("a > b | perdiction false");
console.log(a > b);


console.log("a <= b | perdiction true");
console.log(a <= b);

console.log("a >= b | perdiction false");
console.log(a >= b);


// • Tests using "and" and "or" operators


console.log("string1 && string2 | perdiction true");
console.log(string1 && !!string2 );

console.log("string1 && !string2 | perdiction fasle");
console.log(string1 && !string2 );

console.log("string1 || string2 | perdiction true");
console.log(!!string1 || !!string2 );

console.log("!string1 || 1string2 | perdiction false");
console.log(!string1 || !string2 );


// • Test whether an item is in a array


let arr = [ "book", "pencil", "cover" ];

console.log("arr.indexof(book) | perdiction true");
console.log(arr.indexOf("book") !== -1);

console.log("arr.indexof(pen) | perdiction false");
console.log(arr.indexOf("pen") !== -1);


