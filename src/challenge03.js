export function capitalizeNames(arr){
  return arr.map(string => {
    const firstWord = string.toLowerCase()
    const fixedWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    return fixedWord;
  })
}