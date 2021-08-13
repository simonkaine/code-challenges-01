export function capitalizeObjectKeys(obj) {
    const objectKey = Object.keys(obj);
    return objectKey.map(objectKey => 
        objectKey.toUpperCase());
}

export function sortedKeys(obj) {
    const objectLength = Object.keys(obj);
    return objectLength.sort((a, b) => a.length - b.length);
};
