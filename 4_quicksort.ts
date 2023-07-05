type numOrStr = number | string;

let count_for_quick_sort = 0;
function quicksort(arr: numOrStr[]): numOrStr[] {

    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const middle = arr[middleIndex]
    const less: numOrStr[] = [];
    const greater: numOrStr[] = [];
    for (let i = 0; i < arr.length; i++) {
        count_for_quick_sort += 1
        if (i === middleIndex) {
            continue;
        }
        if (arr[i] < middle) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quicksort(less), middle, ...quicksort(greater)];
}

const array_qs = [
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,
    12341, 2, 1, 0, -3, 0.5, -0.1, 5,
    7, 4, 3, -1, -19, -9, 3, 4,
    5, -6, 0.7, -0.8, 8, 9, 10,
    11, -12, -29, -39, 13, 14, 15,
    -16, 17, 0.1, 18, 19, 20,
    21, -10, -7, -6, 44, 55, -32,
    -23, 0.34, -0.231, 51, 73, 47, 38,
    30, -123, -129, -349, 221, 11345, 320,
    -365, 0.365, -0.178, 56, 745, 43,]

console.log(quicksort([2, 1, 0, -3, 0.5, -0.1, 5, 7, 4, 3]));
const t1 = new Date().getTime();
console.log(quicksort(array_qs.concat(array_qs)));
const t2 = new Date().getTime();
console.log('ms = ', t2 - t1);
console.log('count = ', count_for_quick_sort);
console.log(array_qs.length);
