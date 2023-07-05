// Selection Sort - O(n^2)
// Parameter:
//  1. random array

//* мутирует исходный массив

function selectionSortOptimal<T>(arr: T[]) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            count += 1;
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp;
    }
    console.log('count =', count);
    return arr;
}

const ar = [1, 5, 4, 8, 2, 8, 9, 0, 6, 4, 2];
const arr = ['a', 'c', 'b', 'a'];
console.log(selectionSortOptimal(ar));
console.log(selectionSortOptimal(arr));


function findSmallest(arr: any[]): number {
    let smallest = arr[0];
    let smallest_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index; //* возвращает индекс наименьшего  элемента в массиве
}


console.log(findSmallest(ar));
console.log(findSmallest(arr));

//* АЛГОРИТМ СОРТИРОВКИ ВЫБОРОМ

function selectionSort(arr: any[]): any[] {
    let arrCopie = [...arr];
    const sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let smallest = findSmallest(arrCopie);
        sortedArr.push(arrCopie.splice(smallest, 1)[0]); //? [0] нужен для
        //? разворачивания массива возвращаемого splice
    }
    return sortedArr;
}

console.log('no recursion', selectionSort(ar));

//* АЛГОРИТМ СОРТИРОВКИ ВЫБОРОМ ЧЕРЕЗ РЕКУРСИЮ

function selectionSortRecursion(arr: any[]): any[] {
    //?  изменить типы аргумента и  функции
    let arrCopie = [...arr]; //* необходимо для избежания модификации списка из аргументов ( arr )
    if (!arrCopie.length) return []; //? выход из рекурсии при завершении списка
    let smallest = arrCopie.splice(findSmallest(arrCopie), 1);
    return smallest.concat(selectionSort(arrCopie)); //? передаваемый в рекурсивную функцию список короче на 1 элемент
}

console.log('recursion', selectionSortRecursion(ar));
console.log('recursion', selectionSortRecursion(arr));
