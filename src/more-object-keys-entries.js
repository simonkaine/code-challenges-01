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