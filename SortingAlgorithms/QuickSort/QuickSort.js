/* Quick Sort 


__Pivot is going to be our helper function 
__Pivot PseudoCode: 
=> function called pivot, it will accepts three arguments , an array, startIndex  and an end
=> Grab the pivot from the start of the array
=> store the current pivot in a variable .
=> Loop throug the array from the start untill the end
   ___if the element is greater than the pivot , incremenet the swapindex (pivotINdex) , swap the swapIndex  with the element.
=>Swap the starting elment (i.e the pivot) with the pivot index.


___QuiCK Sort PseudoCode
=>call the pivot helper on the array
=>recursively call the pivot helper on the subarray of the left and the right side
=>base case occurs when we consider a subarray with less than 2 elements

*/

//Swap
function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

// Pivot

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let pivot = arr[startIndex];
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, startIndex, swapIndex);
  return swapIndex;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// QuicKSort
function QuicKSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotINdex = pivot(arr, left, right);
    QuicKSort(arr, left, pivotINdex - 1);
    QuicKSort(arr, pivotINdex + 1, right);
  }
  return arr;
}
console.log(QuicKSort([4, 8, 2, 1, 5, 7, 6, 3]));
