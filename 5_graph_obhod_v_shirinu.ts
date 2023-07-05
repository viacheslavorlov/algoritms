//* Поиск в графе в ширину
// ? надо разобраться с типами
type Graph = Record<string, string[]>;
const graph: Graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g']
};
//* находит путь в графе за минимальное количество шагов (двизение в графе однонаправленное)
function graphSearchInBroad(graph: Graph, start: string, end: string): boolean {
    let queue: string[] = [start];
    while (queue.length > 0) {
        const current = queue.shift() as keyof Graph;
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false;
}

console.log(graphSearchInBroad(graph, 'a', 'g')); //* true
console.log(graphSearchInBroad(graph, 'a', 'y')); //* false
