/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9, 15, 18, 19];
const sortedB4 = [3, 7, 8, 10, 11, 12];

// [1,2,3,4]
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// create empty array for the result
// track of index of the first array and the second
// index1[0], index2[0]
// while we are in-bound in two arrays we well repeatedly do same process
//compare the two index values put the smallest value in the result array
// increment the index of the array that had the smaller value

function mergeSort(arr1, arr2) {
  var mergedArray = [];

  var index1 = 0;
  var index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      mergedArray.push(arr1[index1]);
      index1++;
    } else {
      mergedArray.push(arr2[index2]);
      index2++;
    }
  }
  while (index2 < arr2.length) {
    mergedArray.push(arr2[index2]);
    index2++;
  }
  while (index1 < arr1.length) {
    mergedArray.push(arr1[index1]);
    index1++;
  }
  return mergedArray;
}

let arr1 = [1, 4, 6, 8, 9, 10, 12, 14, 17, 21];
let arr2 = [0, 2, 3, 5, 7, 11, 15];

console.log(mergeSort(arr1, arr2));
