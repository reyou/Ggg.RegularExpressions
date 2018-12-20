var str = "Give 100%! or another 3-1% sorry 25%";
console.log(str);
let matches = str.match(/\D/g);
console.log(JSON.stringify(matches));
