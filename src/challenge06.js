export function readyToPutInTheDOM(arr){
  return arr.map((item) => {
      const answer = `<h1>${item.name}</h1><h2>${item.age}</h2>`
      return answer;
  }) 
}