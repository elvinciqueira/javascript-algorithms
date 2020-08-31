function indexOf(array, element, offset = 0) {
  // split array in half
  const half = parseInt(array.length / 2);
  const current = array[half];

  if (current === element) {
    return offset + half;
  } else if (element > current) {
    const right = array.slice(half);
    return indexOf(right, element, offset + half);
  } else {
    const left = array.slice(0, half)
    return indexOf(left, element, offset);
  }
}

// Usage example with a list of names in ascending order:
const directory = ["Adrian", "Bella", "Charlotte", "Daniel", "Emma", "Hanna", "Isabella", "Jayden", "Kaylee", "Luke", "Mia", "Nora", "Olivia", "Paisley", "Riley", "Thomas", "Wyatt", "Xander", "Zoe"];
console.log(indexOf(directory, 'Hanna')); // => 5
console.log(indexOf(directory, 'Adrian')); // => 0
console.log(indexOf(directory, 'Zoe')); // => 18
