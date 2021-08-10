export function capitalizeNames(arr){
  return arr.map(string => string.charAt(0).toUpperCase() + string.slice())
}