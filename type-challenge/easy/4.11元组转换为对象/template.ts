// 如何遍历一个array? P in T[number] 固定写法
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    // T[number]是固定写法，T代表的是数组T[number]代表的是 union类型
    [P in T[number]]:P
}
// [P in keyof T]:P  数组 keyof Array -> 索引0，1，2，3
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type p1 = TupleToObject<typeof tuple>