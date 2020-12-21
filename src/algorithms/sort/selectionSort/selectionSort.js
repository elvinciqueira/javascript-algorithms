/**
 * Sort an array
 *
 * @param {array} array unsorted array
 * @returns {array} sorted array in asc order
 *
 * @example
 * selectionSort([4, 2, 7, 1, 3]) => [1, 2, 3, 4, 7]
 */

 export default function selectionSort(array) {
   for (let i = 0; i < array.length - 1; i++) {
     let lowestNumberIndex = i

     for (let j = i + 1; j < array.length; j++) {
       if (array[j] < array[lowestNumberIndex]) {
         lowestNumberIndex = j
       }
     }

     if (lowestNumberIndex != i) {
       [array[i], array[lowestNumberIndex]] = [array[lowestNumberIndex], array[i]]
     }
   }

   return array
 }
