/*  INSERTION SORT

__ It builds up the sort by gradually creating larger left half which is always sorted.

PSEUDO-CODE:
__ Start by picking the second element in the array.
__ Now compare the second element in the array 
__ Now compare the second element with the one before it and swap if necessary
__ Continue to  the next element and if is in the incorrect order, iterate through the 
sorted portion (i.e. the left side) to place the element in the correct spot.
__Repeat untill the array is sorted

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {}
  }

  return arr;
}

console.log([9, 2, 1, 8, 5, 4]);
