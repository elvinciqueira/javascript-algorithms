export default function simplifyPath(path) {
  const stack = [];
  let left = 0;
  if (path[path.length - 1] !== '/') {
    path += '/';
  }
  for (let right = 0; right < path.length; right++) {
    if (path[right] === '/') {
      let current = path.slice(left, right);
      console.log(current);
      left = right;
      if (current) {
        if (current === '/..') {
          stack.pop();
        } else if (current === '/.' || current === '/') {
          continue;
        } else {
          stack.push(current);
        }
      }
    }
  }
  if (!stack.length) {
    stack.push('/');
  }
  return stack.join('');
}
