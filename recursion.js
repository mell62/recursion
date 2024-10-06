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

function merge(leftArray, rightArray) {
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, array.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
