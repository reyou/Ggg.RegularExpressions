/*q[^u] does not mean: "a q not followed by a u". 
It means: "a q followed by a character that is not a u".*/
var str = "qqq qwu Iraq qu is on qo qu";
console.log(str);
var matches = str.match(/q[^u]/g);
console.log(JSON.stringify(matches));
matches = str.match(/q[^u]+/g);
console.log(JSON.stringify(matches));
matches = str.match(/q[^u]?/g);
console.log(JSON.stringify(matches));

