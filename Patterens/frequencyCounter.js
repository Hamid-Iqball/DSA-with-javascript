/*
This approach is useful in various scenarios where we need to compare the frequency of elements between two arrays or when performing operations that depend on the frequency of elements in an arrays etc.
 Frequency Counter :
 Write a function called Same ,which accepts two arrays.The function should return true if every value in the array has it's corresponding  value squared in the second array.The frequency of the value must be the same.
 
  */

function Same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequecyCounter1 = {};
  let frequecyCounter2 = {};

  for (let val of arr1) {
    frequecyCounter1[val] = (frequecyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequecyCounter2[val] = (frequecyCounter2[val] || 0) + 1;
  }

  // The for of is for looping over arrays,it cannot loop over an object, and it gives values of array
  for (let key in frequecyCounter1) {
    if (!(key ** 2 in frequecyCounter2)) {
      return false;
    }
    if (frequecyCounter1[key ** 2] !== frequecyCounter2[key]) {
      return false;
    }
  }
  return true;
}
console.log(Same([1, 2, 3], [1, 4, 9]));


// Find Duplicate elements in an Array

function duplicateElements(arr){
    if(!arr.length){
        return false
    }
    
    let frequencyCoutnter ={}
    let duplicate =[]
    
    for(let val of arr){
        frequencyCoutnter[val] = (frequencyCoutnter[val] || 0) + 1
    }
    
    
    for (let key in frequencyCoutnter){
       if(frequencyCoutnter[key]>1){
           duplicate.push(Number(key))
       }
    }
    
    return duplicate
    
}



//Anagram

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let counter = {};

  for (let char of str1) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!counter[char]) {
      return false;
    }
    counter[char]--;
  }

  return true;
}