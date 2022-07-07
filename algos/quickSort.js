function quickSort(arr, start = null, end = null) {
  let i;
  let j;
  if (start) {
    i = start;
  } else {
    i = 0;
  }
  if (end) {
    j = end;
  } else {
    j = arr.length - 1;
  }
  let midpoint = Math.floor(i + j / 2);
  while (arr[i] < arr[midpoint] && i <= midpoint) {
    i++;
  }
  while (arr[j] > arr[midpoint] && j >= midpoint) {
    j--;
  }
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
}

arr = [2, 5, 3, 7, 9, 4, 0, 6, 4, 1];

console.log(quickSort(arr));
