for(var i = 0; i <=100; i++) {
  if (i === 0){
    console.log(i);
  } else if((i%3 === 0) && (i%5 === 0)) {
    console.log("Fizzbuzz");
  } else if (i%3 === 0) {
    console.log("Fizz");
  } else if (i%5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

var y = 0;
while (y <= 100) {
  if (y === 0) {
    console.log(y);
  } else if (y%3 === 0 && y%5 === 0){
    console.log("Fizzbuzz");
  } else if (y%3 === 0){
    console.log("Fizz");
  } else if (y%5 === 0) {
    console.log("Buzz");
  } else {
    console.log(y);
  }
  y++;
}

var arr = ["a", "b", "c", "d"];

for(var j = arr.length; j >= 0; j--) {
  console.log(arr[j]);
}
