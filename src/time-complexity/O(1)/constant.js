function isEvenOrOdd(n) {

  //Time complexity - O(1)
  return n % 2 ? 'Odd' : 'Even'
}

console.log(isEvenOrOdd(10)) // -> Even
console.log(isEvenOrOdd(4)) // -> Even
console.log(isEvenOrOdd(3)) // -> Odd
console.log(isEvenOrOdd(10001)) // -> Odd
