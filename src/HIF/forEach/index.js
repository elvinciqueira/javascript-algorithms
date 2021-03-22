// let sum = 0;
// [1, 2, 3, 4, 5].forEach(element => {
//   sum += element;
// });

// console.log(sum); //15

function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];

    func(arrElement, i);
  }
}

// myForEach(['Apple', 'Watermelon', 'Banana'], function (fruit, index) {
//   console.log(fruit, index);
// }); //?

let sum = 0;
myForEach([1, 2, 3, 4, 5], (num, i) => {
  sum += num;
});

console.log(sum);
