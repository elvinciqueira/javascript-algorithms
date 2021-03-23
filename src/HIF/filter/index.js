const ancestry = [
  {
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1956,
    father: 'Petrus de Milliano',
    mother: 'Sophia van Damme',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    father: 'Carel Haverbeke',
    mother: 'Maria van Brussel',
  },
];

// ancestry.filter(person => person.father.includes('Petrus')); //?

function filter(arr, test) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

filter(ancestry, person => person.father.includes('Petrus')); //?
