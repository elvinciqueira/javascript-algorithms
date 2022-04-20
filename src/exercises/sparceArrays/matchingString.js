export const matchingString = (strings, queries) => {
  const hashMap = new Map();
  
  strings.forEach(string => { 
    if (hashMap.has(string)) {
      hashMap.set(string, hashMap.get(string) + 1);
    } else {
      hashMap.set(string, 1);
    }
  });
  
  
  return queries.map(query => hashMap.get(query) || 0);
}