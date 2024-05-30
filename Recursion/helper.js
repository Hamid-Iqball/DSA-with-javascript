/*
It a design patteren that is commonly used with recursion called helper method recursion.
With helper function we have two function one is the Outer function and inside it is the helper function

*********This is the Patteren ************

function Outer(input){
    var outerScopedVariale =[]

    function helper(helperInput){
        // Modify the outerSCopedvariable
        helper(helperInput(--))
    }
    helper(input)
    return outerScopedVariable;
}

***********Let's connect all of the odd values in an array *************
*/

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]));
