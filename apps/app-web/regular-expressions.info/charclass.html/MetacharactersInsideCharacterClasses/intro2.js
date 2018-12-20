/*[\\x] matches a backslash or an x. The closing bracket ], the caret ^ and the 
hyphen - can be included by escaping them with a backslash, or by placing them 
in a position where they do not take on their special meaning.*/
var str = "To xar\\ty x b\\\\q k+l axd st*r a\\llianc*";
console.log(str);
var matches = str.match(/[\\x]/g);
console.log(JSON.stringify(matches));

