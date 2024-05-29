/* DIVIDE AND CONQUER


This pattern involves dividing  a data set into smaller chunks then repeating a process with the subset of data.

This patteren can tremendously decrease time complexity

An Example:Given a sorted array of integers, write a function called search,that accpets a value and returns 
the index where the value passed to the function is located.
if a value is not found return -1
*/

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currwntElement = arr[middle];
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 6));
