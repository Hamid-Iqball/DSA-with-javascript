/* Javascript has a sort method but it does not always work the way we expect it to work

__The default sort order is according to string unicode code points.Hence if an array has nonString value then every value of that array will first convert to string this the sort method will sort it according to that.


__The built in sort method accepts an optional comparator function, we can  use the comparator function to tell javascript how we want to sort it


__ The Comparator looks at the pair of elements (a and b) determines their sort order on the return value
  . If it returns a negative number , a should come before b.
  . If it returns a positive number , a should come after b. 
  . If it return 0, a and b are the same as far as the sort is concerned.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function compareNums(num1, num2) {
  return num2 - num1;
}
const sort = numbers.sort(compareNums);

//one line code
const abc = [1, 2, 3, 4, 5, 6, 7, 8].sort((a, b) => b - a);
