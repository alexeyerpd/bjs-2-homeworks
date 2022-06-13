function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((v, i) => arr2[i] === v);
}

function advancedFilter(arr) {
  return arr.reduce((acc, v) => {
    if (v >= 0 && v % 3 === 0) {
      acc.push(v * 10);
    }
    return acc;
  },[]); 
}

// function advancedFilter(arr) {
//   return arr
//     .filter((v) => v >= 0 && v % 3 === 0)
//     .map(v => v * 10); 
// }
