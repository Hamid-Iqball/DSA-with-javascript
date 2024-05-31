/*
The Idea is that we create mutiple pointers or values that correspond to an index or position and move towards th 
e beginning , end or middle based on a certain condition.

The multiple pointers pattern is a powerful and flexible technique that can optimize various algorithms by 
reducing their time complexity and improving their efficiency. It is especially useful for problems involving 
arrays and strings, where linear traversal can be leveraged effectively. By understanding and applying this pattern,
 you can solve many common algorithmic problems more efficiently.

 These the following few examples that can be solved easily with Multiple POinters patterens

*/

// 1.SumZero of array

function sumZero(arr) {
  if (!arr.length) {
    return false;
  }
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

console.log(sumZero([-3, -2, -1, 1, 3, 4, 5])); //[-3,3]

//2.Target Sum

function twoSum(arr, target) {
  if (!arr.length) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoSum([-3, -2, -1, 1, 3, 4, 5], 9)); // [4,5]
