const array = ['a', 'b', '3', '5'];

//? O(n)
export function linearSearch(arr: Array<number | string>, item: number | string) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(array, '5')); // 3
console.log(linearSearch(array, '0')); // -1


const arrayObj = [
    {value: 'a'},
    {value: 'b'},
    {value: '3'},
    {value: '5'}
];

export function linearSearchInObject<T>(arr: Array<T>, property: keyof T, value: T[keyof T]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][property] === value) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearchInObject(arrayObj, 'value', '3')); //  2
console.log(linearSearchInObject(arrayObj, 'value', '1')); // -1
