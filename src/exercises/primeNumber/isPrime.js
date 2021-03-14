function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function allPrimesOf(aNumber) {
  const result = [];

  for (let j = 1; j <= aNumber; j++) {
    if (isPrime(j)) {
      result.push(j);
    }
  }

  return result;
}

function primeFactorsOf(aNumber) {
  const primes = allPrimesOf(aNumber);
  const factors = [];
  let i = 0;

  while (aNumber >= 2) {
    if (aNumber % primes[i] === 0) {
      factors.push(primes[i]);
      aNumber = aNumber / primes[i];
    } else {
      i++;
    }
  }

  return factors;
}

console.log(primeFactorsOf(24)); //?
