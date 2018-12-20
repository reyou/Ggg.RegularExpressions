/*
The hyphen can be included right after the opening bracket, 
or right before the closing bracket, 
or right after the negating caret. Both [-x] and [x-] match an x or a hyphen. [^-x] and [^x-] 
match any character that is not an x or a hyphen. This works in all flavors discussed in this 
tutorial. Hyphens at other positions in character classes where they can't form a range may 
be interpreted as literals or as errors. Regex flavors are quite inconsistent 
about this.
*/
var str = "rxight xxx b-exfo-re the --";
console.log(str);
var matches = str.match(/[^-x]/g);
console.log(JSON.stringify(matches));
matches = str.match(/[^-x ]/g);
console.log(JSON.stringify(matches));

