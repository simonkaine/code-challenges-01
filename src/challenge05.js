export function makeStrings(arr){
    
return arr.map((arr) => {
  if (arr.age <= 18) {
     return arr.name + ' is under age!!';
  }
  return arr.name + ' can go to The Matrix';
});
}
