/* Merge Sort 

__It is comination of three things spliting , merging  and sorting
__ Divide and conquer approach.


___The space complexity is  0(n)
___The time complexity is 0(nlog(n))

two step 
1. Merging
2. Sorting 


*/

// Step 1. Merging two sorted arrays
function merge(arr1, arr2) {
  let result = [];

  // For merging
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //for the item that are left in arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  //   For the items that are left in arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

//Sorting Part
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3, 8, 2, 9, 4, 1]));

// let arr = [9,4,5,1,2,10,11,44,33]

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

merge([9, 4, 5, 1, 2], [10, 11, 44, 33]);

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 4, 5, 1, 2, 10, 11, 44, 33, 3]));
