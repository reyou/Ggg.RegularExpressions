var str = "qqq 0xBBaf786 0xCaf%786 www 0xB+Baf78-16 0x/BBaf786";
console.log(str);
var matches = str.match(/0[xX][A-Fa-f0-9]+/g);
console.log(JSON.stringify(matches));

