/*
To include an unescaped caret as a literal, place it anywhere except 
right after the opening bracket. [x^] matches an x or a caret. 
This works with all flavors discussed in this tutorial.
*/
var str = "^To xar\\ty x b\\\\q k+l ^ axd st*r a\\llianc*";
console.log(str);
var matches = str.match(/[x^]/g);
console.log(JSON.stringify(matches));

