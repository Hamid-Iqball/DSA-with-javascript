/*
 Frequency Counter :
 Write a function called Samw ,which accepts two arrays.The function should return true if every value in the array has it's corresponding  value squared in the second array.The frequency of the value must be the same.
 
  */

// Navie approach
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

// function sum(arr1, arr2) {
//   if (arr1.lenght !== arr2.lenght) {
//     return false;
//   }

//   for (let i = 0; i < arr1.lenght; i++) {
//     let currentIndex = arr2.indexof(arr1[i] ** 2);
//     if (currentIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(currentIndex, 1);
//   }
//   return true;
// }
// console.log(sum([1, 2, 5, 3], [1, 4, 9]));
