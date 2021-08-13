export function capitalizeObjectKeys(obj) {
    const objectKey = Object.keys(obj);
    return objectKey.map(objectKey => 
        objectKey.toUpperCase());
}

export function sortedKeys(obj) {
    const objectLength = Object.keys(obj);
    return objectLength.sort((a, b) => a.length - b.length);
};

export function getFilteredKey(obj) {
    const objectFilter = Object.keys(obj);
    return objectFilter.filter(obj => obj === 'age');
}

export function getArrayOfKeysAndValues(obj){
    const newArray = Object.entries(obj);
    return newArray;
}

export function sortedArraysByValuesLength(obj) {
    return Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
}