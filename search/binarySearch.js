const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    let middleItem = arr[middleIndex];
    console.log(middleIndex, middleItem, leftIndex, rightIndex);
    if (middleItem === target) return middleIndex;
    if (middleItem > target) rightIndex = middleIndex - 1;
    else leftIndex = middleIndex + 1;
  }

  return -1;
};

// Big-O = O(logn)
console.time("performance");
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 7)); // -1
console.timeEnd("performance");
