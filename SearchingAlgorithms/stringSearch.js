// Naive soltion
function stringSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i + j]) {
        break;
      }
      if (j === str2.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch("helloHamidIQballo", "llo"));

//Optimized solution

function countStringOccurenece(str1, str2) {
  if (str2.length === 0) {
    return null;
  }

  let count = 0;
  let pos = str1.indexOf(str2);

  while (pos !== -1) {
    count++;
    pos = str1.indexOf(str2, pos + str2.length);
  }
  return count;
}

const str1 = "This is a test. This test is only a test.";
const str2 = "test";

console.log(countStringOccurenece(str1, str2));
