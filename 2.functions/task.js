// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let v of arr) {
    min = Math.min(min, v);
    max = Math.max(max, v);
    sum += v;
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

// Задание 2
function worker(arr) {
  return arr.reduce((acc, v) => acc + v, 0);
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let arr of arrOfArr) {
    max = Math.max(max, func(arr))
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let v of arr) {
    min = Math.min(min, v);
    max = Math.max(max, v);
  }

  return Math.abs(max - min);
}
