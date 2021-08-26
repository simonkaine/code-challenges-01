export function returnTen(str) {
    return str.split('').slice(-10);
}

export function findMax(matrix) {
    const maxNum = matrix;
    const max = Math.max(...[].concat(...maxNum));
    return max;
}

export function totalSum(matrix) {
    let sum = 0;
    matrix.forEach((item) => {
      if(Array.isArray(item)) {
       sum += totalSum(item);
      } else {
      sum += item;
      }
    })
    return sum;
}

