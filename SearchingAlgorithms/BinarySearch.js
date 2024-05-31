/*
. Binary search is a significant improvement to linear search.
. Rather tha  eliminating one element at a time , we can eliminate half of the remaining elments at a timr.
. Binary search works on  sorted array
. Divide and Conquer
. Worst and Average Case O(logn)   , Best Case : O(1)
*/
function BinarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else if (val > arr[middle]) {
      start = middle + 1;
    } else {
      return middle;
    }
    middle = Math.floor((start + end) / 2);
  }
  return middle;
}
BinarySearch([3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 76, 77], 13);
