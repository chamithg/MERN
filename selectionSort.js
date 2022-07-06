const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function selection_sort(arr) {
  for (let i = 0; arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
      if (min != i) {
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
      }
    }
    return arr;
  }
}
console.log(selection_sort(numsRandomOrder));


// function selection_sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;

//     for (let j = i; j < arr.length; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }

//     if (min != i) {
//       let temp = arr[min];
//       arr[min] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   return arr;
// }
// console.log(selection_sort(numsRandomOrder));