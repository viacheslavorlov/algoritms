//? define interface if needed
interface IItem {
    property: any
    //? delete any type
}

//* returns index of searched element
function binary_search(list: IItem[] | any[], item: IItem | any): null | number {
    // ?delete any type, change function return if needed
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

const my_list: number[] = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null
