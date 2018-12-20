/*You can find an identifier in a programming language with [A-Za-z_][A-Za-z_0-9]* */
var str = "5om3x and Xhere a9";
console.log(str);
var matches = str.match(/[A-Za-z_][A-Za-z_0-9]/g);
console.log(JSON.stringify(matches));
matches = str.match(/[A-Za-z_][A-Za-z_0-9]*/g);
console.log(JSON.stringify(matches));
