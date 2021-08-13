export function capitalizeObjectKeys(obj) {
    const objectKey = Object.keys(obj);
    return objectKey.map(objectKey => 
        objectKey.toUpperCase());
}