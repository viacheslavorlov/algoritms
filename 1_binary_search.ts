//? O(log2n)

//* returns index of searched element
//* только для отсортированного массива
function binarySearch<T>(list: T[], item: T): number {
    let start = 0;
    let end = list.length - 1;
    let mid: number;
    let found = false;
    let position = -1;

    while (!found && start <= end) {
        mid = Math.floor((start + end) / 2);
        let guess = list[mid];
        if (guess === item) {
            found = true;
            position = mid;
        }
        if (guess > item) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return position;
}

const my_list: number[] = [1, 3, 5, 7, 9, 11, 15, 103, 134115, 12344555];

console.log(binarySearch(my_list, 3)); // 1
console.log(binarySearch(my_list, 134115)); // 1
console.log(binarySearch(my_list, -1)); // -1


//* рекурсивная функция для бинарного поиска
//* arr[0] <= item <= arr[arr.length - 1]
function recursiveBinarySearch<T>(arr: T[], item: T, start: number = 0, end: number): number {
    let middle = Math.floor((start + end) / 2);
    if (item === arr[middle]) {
        return middle;
    }
    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(arr, item, middle + 1, end)
    }
}

console.log(recursiveBinarySearch(my_list, 103, 0, my_list.length)); //* 7

console.log(recursiveBinarySearch(my_list, 1000, 0, my_list.length)); //* 7
