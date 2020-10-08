export default function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] < 0) {
      negatives += 1;
    } else if (arr[i] > 0) {
      positives += 1;
    } else {
      zeros += 1;
    }
  }

  console.log(
    `${(positives / arrLength).toFixed(6)}
    ${(negatives / arrLength).toFixed(6)}
    ${(zeros / arrLength).toFixed(6)}`,
  );

  return [
    positives / arrLength,
    +(negatives / arrLength).toFixed(6),
    +(zeros / arrLength).toFixed(6),
  ];
}
