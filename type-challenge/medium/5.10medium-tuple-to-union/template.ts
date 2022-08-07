// T[number] tuple 转 union
// 第一种方法
// type TupleToUnion<T extends any[]> = T[number]
// 第二种方法
type TupleToUnion<T extends any[]> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never