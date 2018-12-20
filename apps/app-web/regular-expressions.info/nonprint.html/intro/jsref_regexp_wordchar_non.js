var str = "1!2@3#4$5%6^7&8*9(0) q wEz []{}";
console.log(str);
let matches = str.match(/\W/g);
console.log(JSON.stringify(matches));
