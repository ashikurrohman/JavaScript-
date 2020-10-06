let value = prompt("How old are you ? " );
let check = Number(value);
let result = ( check <= 10 ) ? " You are not eligible for this job " : (check <= 30 ) ? " You can join":'What an unusual age!';
console.log(result)
