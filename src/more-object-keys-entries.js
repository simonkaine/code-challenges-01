export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house)
}

export function updateNumbers(obj) {
    return Object.entries(obj).map(obj => obj[0] + ": " + obj[1])
}

export function totalCharacters(arr) {
    let count = 0;
    let obj = Object.values(arr);

    obj.forEach(arr => { 
        count += arr.children.length;
        if (arr.spouse) count++;
        count++
    })
    return count;
}

//----------Code challenge 04
// Set up test to take in two arguments characters, character1 etc
// Use Object Entries that creates array
// Map though the array objects to see if children exist, if so return true if not return false

// export function hasChildrenEntries(arr, character) {
//     Object.entries(arr).forEach((arr) => {
//         if (arr.name === character && arr.children === []) {
//             return true;
//         } else {
//         return false; }
//     })
// } 

// This was my last attempt at this @problem 04.. I couldn't progress past this point.
export function hasChildrenEntries(arr, character) {
    Object.entries(arr).forEach((arr) => {
        if (arr.name === character && arr.children === []) {
            return true;
        } 
        if (arr.name === character && !arr.children === []) {
        return false;
        }
    })
} 