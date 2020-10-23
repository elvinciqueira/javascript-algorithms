export default function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let maxScore = 0;
  let minScore = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];

      maxScore++;
    } else if (scores[i] < lowestScore) {
      lowestScore = scores[i];

      minScore++;
    }
  }

  return [maxScore, minScore];
}
