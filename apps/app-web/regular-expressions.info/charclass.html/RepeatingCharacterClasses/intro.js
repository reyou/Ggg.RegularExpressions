/*If you repeat a character class by using the ?, * or + operators, 
you're repeating the entire character class. 
You're not repeating just the character that it matched. 
The regex [0-9]+ can match 837 as well as 222.*/
var str = "The regex [0-9]+ can match 837 as well as 222*";
console.log(str);
var matches = str.match(/[0-9]+/g);
console.log(JSON.stringify(matches));

