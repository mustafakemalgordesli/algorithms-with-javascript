const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;

  return -1;
};

// Big-O = O(n)

console.time("performance");
console.log(linearSearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(linearSearch([-5, 2, 4, 6, 10], 10)); // 2
console.log(linearSearch([-5, 2, 4, 6, 10], 7)); // -1
console.timeEnd("performance");
