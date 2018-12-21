/*The character class [^1234-[3456]] is both negated and subtracted from. In all flavors that support character class subtraction, the base class is negated before it is subtracted from. 
This class should be read as "(not 1234) minus 3456". Thus this character class matches any character other than the digits 1, 2, 3, 4, 5, and 6.*/

var str = "letter 0123789 not a vowel";
console.log(str);
let matches = str.match(/[^1234-[3456]]/g);
console.log(JSON.stringify(matches));
