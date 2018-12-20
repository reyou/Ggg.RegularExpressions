/*To search for a star or plus, use [+*]. Your regex will work fine 
if you escape the regular metacharacters inside a character class, 
but doing so significantly reduces readability.*/
var str = "To search k+l and st*r allianc*";
console.log(str);
var matches = str.match(/[+*]/g);
console.log(JSON.stringify(matches));

