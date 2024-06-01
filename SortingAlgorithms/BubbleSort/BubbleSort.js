/*               
 *******BubbleSort********

__ Its not used that much but still it has soome advantages in some situations.
__ Also it help us understand other sorting algorithms.
__ In sorting alogorithms the larget value bubbles up to the top .
__ Swapping is very important to bubble sort.
__ ES2015: const swap = (arr, idx1, idx2)=> {[arr[idx1], arr[idx2]]= [arr[idx2], arr[idx1]]}


*/

const arr = [4, 3, 6, 2, 7, 1, 8];

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

//  The Optimized version :If noSwap occur during a pass, it indicates that the array is already sorted, and the algorithm can terminate early, thereby improving efficiency.

function bubbleSort2(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort2([3, 2, 4, 1]));

// The time complexity is O(n)**2
