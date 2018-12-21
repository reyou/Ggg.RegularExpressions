/*The character class [\p{Nd}-[^\p{IsThai}]] matches any 
single Thai digit. The base class matches any 
Unicode digit. All non-Thai characters are subtracted from 
that class. [\p{Nd}-[\P{IsThai}]] does the same. 
[\p{IsThai}-[^\p{Nd}]] and [\p{IsThai}-[\P{Nd}]] also match 
a single Thai digit by subtracting all non-digits 
from the Thai characters. */

var str = "letter that is not a vowel";
console.log(str);
let matches = str.match(/[\p{Nd}-[^\p{IsThai}]]/g);
console.log(JSON.stringify(matches));
