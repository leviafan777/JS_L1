function longest(arr, n) {
    let max = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > max) {
        max = arr[i].length;
      }
    }
    let sortedArr = arr.slice().sort((a, b) => {
      if (b.length === a.length) {
        return arr.indexOf(a) - arr.indexOf(b);
      }
      return b.length - a.length;
    });
    return sortedArr[n - 1];
  }