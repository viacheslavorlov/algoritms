const array = [
    2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
];

// @ts-ignore
let count = 0;

//* мутирует исходный массив
//* Сложность О(n * n)
const bubbleSort = <T>(arr: T[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = temp;
            }
            count += 1;
        }
    }
    return arr
}

console.log(bubbleSort(array));

console.log('count = ', count);

