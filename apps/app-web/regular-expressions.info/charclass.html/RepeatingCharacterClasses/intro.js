/*If you repeat a character class by using the ?, * or + operators, 
you're repeating the entire character class. 
You're not repeating just the character that it matched. 
The regex [0-9]+ can match 837 as well as 222.*/

var str = "The regex [0-9]+ can match 837 as well as 222 4444*";
console.log(str);
// + 1 or more
var matches = str.match(/[0-9]+/g);
console.log(JSON.stringify(matches));
matches = str.match(/([0-9])\1/g);
console.log(JSON.stringify(matches));

