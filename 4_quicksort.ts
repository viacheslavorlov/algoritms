type numOrStr = number | string;

function quicksort(arr: numOrStr[]): numOrStr[] {

    if (arr.length < 2) {
        return arr;
    }
    const middle = arr[Math.floor(arr.length / 2)];
    const less = arr.filter(item => item < middle);
    const greater = arr.filter(item => item > middle);

    return [...quicksort(less), middle, ...quicksort(greater)];
}

console.log(quicksort([2, 1, 0, -3, 0.5, -0.1, 5, 7, 4, 3]));