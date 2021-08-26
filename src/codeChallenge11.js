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

export function grandTotal(stores) {
 // From where I think this code will go when it's working is: 
 // I have to take each hoursOpen element index and add it too the 
 // correct sub index of each location. re-store those values in the 
 // right locations and to total those up into cookieStores and return 
 // cookie stores. But I'm not sure how to return the correct order 
 // of the totaled arrays. 
// Also, very hard to set the test up for this one so I can't attempt the last 
// one yet seeing that it is simliar.
}
