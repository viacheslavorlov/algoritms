//* рекурсивная функция вычисления факториала
let count1 = 0
const factorial_fibonachi = (n: number): number => {
    count1 += 1
    if (n === 1) {
        return 1
    }
    return n * factorial_fibonachi(n - 1)
}

console.log(factorial_fibonachi(4));

let count2 = 0
const fibbonachi = (n: number): number => {
    count2 += 1
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibbonachi(n - 1) + fibbonachi(n - 2)
}

console.log(fibbonachi(10));

console.log(count1, count2);
