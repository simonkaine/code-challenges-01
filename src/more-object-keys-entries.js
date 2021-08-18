export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house)
}

export function updateNumbers(obj) {
    return Object.entries(obj).map(obj => obj[0] + ": " + obj[1])
}

