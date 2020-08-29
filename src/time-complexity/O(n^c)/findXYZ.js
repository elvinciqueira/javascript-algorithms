function findXYZ(n) {
  const solutions = []

  for (let x = 0; x < n.length; x++) {
    for (let y = 0; y < n.length; y++) {
      for (let z = 0; z < n.length; z++) {
        if (3 * x + 9 * y + 8 * z === 79) {
          solutions.push({
            x,
            y,
            z
          })
        }
      }
    }
  }

  return solutions
}

console.log(findXYZ(10)); // => [{x: 0, y: 7, z: 2}, ...]
