export const problemSet = problemSolutions => {
  const problemCount = problemSolutions.reduce((acc, curr) => {
    const sum = curr.reduce((acc, curr) => acc + curr, 0);
    return sum >= 2 ? acc + 1 : acc;
  }, 0);

  return problemCount;
};
