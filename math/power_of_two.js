const isPowerOfTwo = (n) => {
  if (n < 1) return false;
  for (let i = 1; i <= n; i *= 2) {
    if (n === i) return true;
  }
  return false;
};

console.time("performance");
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(24));
console.log(isPowerOfTwo(128));
console.timeEnd("performance");
