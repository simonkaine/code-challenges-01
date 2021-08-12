export function fiveAndGreaterOnly(arr) {
    return arr.filter((num) => {
        if (num >= 5) {
            return num;
        }
    })
}