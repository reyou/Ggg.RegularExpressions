/*The character class [a-z-[aeiuo]] matches a single
letter that is not a vowel.
In other words: it matches a single consonant.
Without character class subtraction or intersection,
the only way to do this would be to list all
consonants: [b-df-hj-np-tv-z]. */

var str = "letter that is not a vowel";
console.log(str);
let matches = str.match(/[a-z-[aeiuo]]/g);
console.log(JSON.stringify(matches));
matches = str.match(/[b-df-hj-np-tv-z]/g);
console.log(JSON.stringify(matches));