const euclidean = (x, y) => {
  if (y > x) {
    const temp = y;
    y = x;
    x = temp;
  }
  if (x % y == 0) return y;
  return euclidean(y, x % y);
};

console.log(euclidean(20, 15)); // 5
console.log(euclidean(85, 115)); //5
