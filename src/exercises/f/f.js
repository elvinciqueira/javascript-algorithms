export const f = (x, y, z) => {
  return square(x) + square(y) + square(z) -
          square(x > y ? (y > z ? z : y) : (x > z ? z : x));
}

export const square = (x) => {
  return x * x;
}
