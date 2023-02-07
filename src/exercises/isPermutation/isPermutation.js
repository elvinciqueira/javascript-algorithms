export function isPermutation(str1, str2, map = new Map()) {
  const isEmpty = !str1 || !str2;
  if (isEmpty) return false;
  const hasDifferentLength = str1.length !== str2.length;
  if (hasDifferentLength) return false;
  for (let index = 0; index < str1.length; index++) {
    const char = str1[index];
    const charAsciiCode = str1.charCodeAt(index);
    map.set(char, charAsciiCode);
  }
  let isTheSame = false;
  for (let index = 0; index < str2.length; index++) {
    const currentCharAsciiCode = str2.charCodeAt(index);
    const storedCharAsciiCode = map.get(str2[index]);
    isTheSame = Boolean(currentCharAsciiCode === storedCharAsciiCode);
  }
  return isTheSame;
}
