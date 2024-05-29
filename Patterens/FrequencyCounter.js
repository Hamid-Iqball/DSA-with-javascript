/*
 Frequency Counter :
 Write a function called Samw ,which accepts two arrays.The function should return true if every value in the array has it's corresponding  value squared in the second array.The frequency of the value must be the same.
 
  */

// 1. Navie approach [O(n)**2]
function Same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let cuurentIndex = arr2.indexOf(arr1[i] ** 2);
    if (cuurentIndex === -1) {
      return false;
    }
    //remove element from arr2
    arr2.splice(cuurentIndex, 1);
  }

  return true;
}

console.log(Same([1, 3], [1, 9]));

// 2. ReFactor [0(n)]
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // The for of is for looping over arrays,it cannot loop over an object, and it gives values of array
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //The for in  is for looping over objects
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same2([1, 2, 3], [1, 4, 9]));

//
