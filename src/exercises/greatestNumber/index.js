// O(N^2)
// function greatestNumber(array) {
//   let isGreatest;
//   for (let i in array) {
//     isGreatest = true;
//     for (let j in array) {
//       if (array[j] > array[i]) {
//         isGreatest = false;
//       }
//     }
//     if (isGreatest) {
//       return array[i];
//     }
//   }
// }

// refactored to O(N)
function greatestNumber(array) {
  let greatest = array[0];
  for (let i in array) {
    if (array[i] > greatest) {
      greatest = array[i];
    }
  }
  return greatest;
}

console.log(greatestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
