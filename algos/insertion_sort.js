//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

//Create a function that will accept an array as an input, and it will return the sorted version of that array using the Insertion Sort approach

function insetionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var j = i;
    while (arr[j] < arr[j - 1]) {
      // swap in normal method ==> Method 1
      // var temp = arr[j];
      // arr[j] = arr[j - 1];
      // arr[j - 1] = temp;
      // another way to swap in single line  ===> Method 2
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
}

var arr = [3, 4, 8, 7, 2, 6, 4, 1, 10, 15, 24, 11, 12, 67, 45, 32, 9, 5];

console.log(insetionSort(arr));
