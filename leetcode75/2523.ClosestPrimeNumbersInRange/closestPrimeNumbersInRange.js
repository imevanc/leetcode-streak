/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const primes = [];
    for (let i = left; i <= right; i++){
        if (isPrime(i)){
            primes.push(i);
        }
    }
    if (primes.length < 2){
        return [-1, -1];
    }
    if (primes.length === 2){
        return primes;
    }
    const hashDiff = {}
    for (let i=1; i<=primes.length-1; i++){
        hashDiff[primes[i-1]+"-"+primes[i]] = primes[i]-primes[i-1];
    }
    let smallestPair = Object.keys(hashDiff)[0];
    for (pair in hashDiff){
        if (hashDiff[pair] < hashDiff[smallestPair]){
            smallestPair = pair;
        }
    }
    return smallestPair.split("-").map(el => Number(el));
};

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
