/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const nums1A = [1, 2, 2, 2, 7];
//
const nums1B = [2, 2, 6, 6, 7];
//

//[1,2,2,2,6,6,7]

const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

function orderedMultisetUnion(sortedA, sortedB) {
  // create iterator for first array and second array, start them at index zero
  let i = 0;
  let j = 0;
  // create empty array for results
  let returnArray = [];
  // as long as i and j are with in bounds of respective arrays, we will repeat a certain process
  while (i < sortedA.length || j < sortedB.length) {
    // compare elements at index i and j to see which is smaller, put smaller into new array and increment the index for the smaller element
    if (sortedA[i] < sortedB[j]) {
      returnArray.push(sortedA[i]);
      i++;
    } else if (sortedB[j] < sortedA[i]) {
      returnArray.push(sortedB[j]);
      j++;
    }
    // if they are the same, put one of those to the resulting array, and increment both indexes
    else {
      returnArray.push(sortedA[i]);
      i++;
      j++;
    }
  }

  //   // as long as i is within bounds of firstArray (this measn remaining values left in first array). we will push each valu to the result
  //   while (i < sortedA.length) {
  //       returnArray.push(sortedA[i]);
  //       i++;
  //   }
  //   // as long as j is within bounds of secondArray (this measn remaining values left in second array). we will push each valu to the result
  // while (j < sortedB.length) {
  //     returnArray.push(sortedB[j]);
  //     j++;
  // }

  // return new array
  return returnArray;
}

console.log(orderedMultisetUnion(nums2A, nums2B));
