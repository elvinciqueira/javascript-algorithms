export default function diagonalDifference(matrix) {
 // length of input matrix.
 const length = matrix.length;
 let diagonal1 = 0, diagonal2 = 0;

 // Looping through the array and summing the diagonals.
 for (let i = 0; i < length; i++) {
   // Calculating the primary diagonal.
     diagonal1 += matrix[i][i];
   // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += matrix[length -1 - i][i]
 }

 return Math.abs(diagonal1 - diagonal2);
}
