function fibs(length) {
  //iterative method
  let fibsArray = [];
  for (let i = 0; i < length; i++) {
    if (i <= 1) {
      fibsArray.push(i);
      continue;
    }
    fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
  }
  return fibsArray;
}

console.log(fibs(8));

function fibsRec(length) {
  //recursive method
  console.log("This was printed recursively"); //to count number of times function was called recursively
  if (length === 1) {
    return [0, 1];
  }
  let num = fibsRec(length - 1);
  num.push(num[num.length - 1] + num[num.length - 2]);
  return num;
}

console.log(fibsRec(8));
