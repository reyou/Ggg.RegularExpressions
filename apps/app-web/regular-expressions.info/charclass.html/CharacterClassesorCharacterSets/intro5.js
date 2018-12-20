/*You can combine ranges and single characters. 
[0-9a-fxA-FX] matches a hexadecimal digit or the 
letter X. Again, the order of the characters 
and the ranges does not matter. */
var str = "5om3x and Xhere";
console.log(str);
let matches = str.match(/[0-9a-fxA-FX]/g);
console.log(JSON.stringify(matches));
