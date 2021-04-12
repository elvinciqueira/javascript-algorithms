function migratoryBirds(birds) {
  const hashMap = {};

  birds.forEach(bird => {
    if (bird in hashMap) {
      hashMap[bird] += 1;
    } else {
      hashMap[bird] = 1;
    }
  });

  let maxOccur = 1;
  let typeOfBird = 0;
  for (let birdTypeId in hashMap) {
    if (hashMap[birdTypeId] > maxOccur) {
      typeOfBird = birdTypeId;
      maxOccur = hashMap[birdTypeId];
    }
  }

  return typeOfBird;
}
