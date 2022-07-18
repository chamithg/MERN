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
  let array = [];

  const arrAcount = {};
  sortedA.forEach((element) => {
    arrAcount[element] = (arrAcount[element] || 0) + 1;
  });

  const arrBcount = {};
  sortedB.forEach((element) => {
    arrBcount[element] = (arrBcount[element] || 0) + 1;
  });

  //   console.log(Object.keys(arrAcount).length);
  //   console.log(Object.keys(arrBcount).length);

  console.log(arrAcount[Object.keys(arrAcount)[0]]);
  console.log(arrBcount[0]);

  //   for (const property in arrAcount) {
  //     console.log(property);
  //   }
  //   for (const property in arrBcount) {
  //     console.log(property);
  //   }

  var index1 = 0;
  var index2 = 0;
  while (
    index1 < Object.keys(arrAcount).length &&
    index2 < Object.keys(arrBcount).length
  ) {
    if (
      parseInt(arrAcount[Object.keys(arrAcount)[index1]]) <
      parseInt(arrBcount[Object.keys(arrBcount)[index2]])
    ) {
      for (var x = 0; x < arrAcount[Object.keys(arrAcount)[index1]]; x++) {
        array.push(Object.keys(arrAcount)[index1]);
      }
      index1++;
    } else if (
      parseInt(arrAcount[Object.keys(arrAcount)[index1]]) >
      parseInt(arrBcount[Object.keys(arrBcount)[index2]])
    ) {
      for (var x = 0; x < arrAcount[Object.keys(arrBcount)[index2]]; x++) {
        array.push(Object.keys(arrBcount)[index2]);
      }
      index2++;
    }
  }
  //   while (index2 < arr2.length) {
  //     mergedArray.push(arr2[index2]);
  //     index2++;
  //   }
  //   while (index1 < arr1.length) {
  //     mergedArray.push(arr1[index1]);
  //     index1++;
  //   }

  return array;
}

console.log(orderedMultisetUnion(nums1A, nums1B));
