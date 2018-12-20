/*q[^u] does not mean: "a q not followed by a u". 
It means: "a q followed by a character that is not a u".*/
var str = "qqq qwu Iraq qu is on qo qu q qarantinqa qabaqpb";
console.log(str);
var matches = str.match(/q[^u]b/g);
console.log(JSON.stringify(matches));
// 1 or more
matches = str.match(/q[^u]b+/g);
console.log(JSON.stringify(matches));
// 0 or 1
matches = str.match(/q[^u]b?/g);
console.log(JSON.stringify(matches));

