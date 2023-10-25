function findShortestString(arr) {
  // type your code here
  let len = arr[0].length
  let currentShortestIndex = 0 
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].length < len) {
      currentShortestIndex = index;
      len = arr[index].length;
    }
    if (len === 0) {
      return arr[currentShortestIndex];
    }
  }
  return arr[currentShortestIndex];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
/**
 * given an array of strings,
 * loop through the array by index, storing the shortest index
 * compare the shortest value to the new index, replacing if it is shorter
 * if the array finishes or find a string of length 0
 * return the shortest index
 */
// And a written explanation of your solution
/**
 * string parsing is generally very easy, because its used so much
 * its been done to death in many languages (python, notably, has several extremely efficient string
 * methods) so doing this problem is trivial in itself, using string.length
 * the only tricky bit arises in storing the current shortest (keeping the older one if there is a
 * match) and an early terminate if string length hits 0
 */
