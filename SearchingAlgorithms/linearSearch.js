// This is Navie solution for Searching an element in an array

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([2, 3, 4, 5, 6, 7], 7));

// BIG-0: best caseO(1), Average Case(O(n) , O(n))
