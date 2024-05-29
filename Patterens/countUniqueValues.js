/*
Implement a function called countUniqueValue, which accepts a sorted array, and counts the unique values in the array.There cam be negative numbers in the array,but it will be sorted

p.S:it only works with a sorted array
*/

function countUniqueValue(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValue([1, 1, 1, 1, 1, 1, 2]));
