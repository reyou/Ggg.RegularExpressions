/*[^0-9\r\n] matches any character that is not a digit or a line break.*/
var str = "qwe \r g3ntlem2nts \n yo here";
console.log(str);
var matches = str.match(/[^0-9\r\n]/g);
console.log(JSON.stringify(matches));

