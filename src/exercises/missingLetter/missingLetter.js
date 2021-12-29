export function missingLetter(str) {
  const alphabet = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
  };

  for (let i = 0; i < str.length; i++) {
    const letter = str.charAt(i);
    if (alphabet[letter]) {
      alphabet[letter] = false;
    }
  }

  for (const letter in alphabet) {
    if (alphabet[letter] === true) {
      return letter;
    }
  }
}
