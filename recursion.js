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
