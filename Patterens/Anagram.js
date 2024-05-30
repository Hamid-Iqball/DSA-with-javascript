/*
Aanagram:An anagram is a word,phrase, or name formed by rearranging the word letter of another word, such as cinema , formed from iceman.
Problem statemt: Write a function that determines if the second string is an nagram of the first. 
*/

function Anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter2 = second[i];
    if (!lookup[letter2]) {
      return false;
    } else {
      lookup[letter2] -= 1;
    }
  }
  return true;
}

console.log(Anagram("hamid", "dimah"));
