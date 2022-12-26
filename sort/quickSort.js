const quickSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const arr = [-6, 20, 8, -2, 4];
quickSort(arr);
console.log(arr);

// Big-O = O(n^2)
