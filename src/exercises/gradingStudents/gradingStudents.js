export default function(grades) {
  let result = 0;

  for (let i = 0; i < grades.length; i++) {
    result = Math.ceil(grades[i] / 5) * 5;

    if (grades[i] < 38) {
      grades[i] = grades[i];
    } else if (result - grades[i] < 3) {
      grades[i] = result;
    } else {
      grades[i] = grades[i];
    }
  }

  return grades;
}
