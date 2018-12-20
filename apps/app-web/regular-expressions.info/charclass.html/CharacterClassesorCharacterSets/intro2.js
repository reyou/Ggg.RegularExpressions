var str = "grey gaga gege gray does not match graay, graey";
console.log(str);
let matches = str.match(/gr[ae]y/g);
console.log(JSON.stringify(matches));
