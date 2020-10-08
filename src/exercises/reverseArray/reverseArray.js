export default function reverseArray(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let temp = arr[leftPointer];
    arr[leftPointer] = arr[rightPointer];
    arr[rightPointer] = temp;

    leftPointer++;
    rightPointer--;
  }

  return arr;
}
