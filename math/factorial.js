const factorial = (n) => {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

const recursiveFactorial = (n) => {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120
