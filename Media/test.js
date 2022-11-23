console.log("*********Error Handling: try,catch *****");

  console.log("**********Error Handling Example-1**************");
  // message & stacktrace : name & message
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log(err.message);
}

console.log("**********Error Handling Example-2**************");

let num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
console.log("Something Went Wrong!Please try again later.");
}


console.log("**********Error Handling Example-3 throw & finally**************");

let n=-1;

try{
    if(n<0)
    throw "Negative number not allowed"
    console.log("Your number is : "+n);
}catch(err)
{
    console.log(err);
}
finally{
    console.log("Num: "+n);
}