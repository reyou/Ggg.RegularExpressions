/*
For flavors that support Unicode, it also includes Unicode character 
escapes and Unicode properties. [$\u20AC] matches a dollar or euro sign, 
assuming your regex flavor supports Unicode escapes.
*/
var str = "For flavors $120 dollars and €102";
console.log(str);
var matches = str.match(/[$\u20AC]/g);
console.log(JSON.stringify(matches));


