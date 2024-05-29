/*
  MULTIPLE POINTERS:Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain conidtion.

  P.S:Very efficient for solving problems with minimal space complexity as well


  Example:
  Write a function called sumZero which accepts a sorted array of integers.The function should find first pair where the sum is 0.Return an array that includes both values that sum to zero or undefined id pair does not exists
  */

// Navie solution O(N**2)

function multiplePOinters(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr1[j] === 0) {
        return [arr1[i], arr1[j]];
      }
    }
  }
}

console.log(multiplePOinters([-2, -1, 1, 2]));

//Refactor O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-5, -4, -2, -1, 3, 4, 5]));
