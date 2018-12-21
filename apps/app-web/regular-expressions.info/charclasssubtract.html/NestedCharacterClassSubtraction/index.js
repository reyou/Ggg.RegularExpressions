/*Since you can use the full character class syntax within the subtracted character class, you can subtract a class from the class being subtracted. [0-9-[0-6-[0-3]]] first subtracts 0-3 from 0-6, yielding [0-9-[4-6]], or [0-37-9], which matches any character in the string 0123789. */

var str = "letter 0123789 not a vowel";
console.log(str);
let matches = str.match(/[0-9-[0-6-[0-3]]]/g);
console.log(JSON.stringify(matches));
