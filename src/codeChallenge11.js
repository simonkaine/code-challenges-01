export function returnTen(str) {
    return str.split('').slice(-10);
}

export function findMax(matrix) {
    const maxNum = matrix;
    const max = Math.max(...[].concat(...maxNum));
    return max;
}