/*If you want to repeat the matched character, 
rather than the class, you need to use backreferences. ([0-9])\1+ matches 222 but not 837. 
When applied to the string 833337, it matches 3333 in the middle of this string. 
If you do not want that, you need to use lookaround.*/

var str = "thi8s1 matches 222 but not 837 889 111222119 94556.";
console.log(str);
// + 1 or more
var matches = str.match(/([0-9])/g);
console.log("([0-9])", JSON.stringify(matches));
matches = str.match(/([0-9])\1/g);
console.log("([0-9])\\1", JSON.stringify(matches));
matches = str.match(/([0-9])\2/g);
console.log("([0-9])\\2", JSON.stringify(matches));
matches = str.match(/([0-9])\1+/g);
console.log("([0-9])\\1+", JSON.stringify(matches));
matches = str.match(/([0-9])\1*/g);
console.log("([0-9])\\1*", JSON.stringify(matches));
