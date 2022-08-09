// const aa = ['name', 'age', 'location', 'email'] as const;
// type A = typeof aa[number] //数组转化成联合类型
type StringToUnion<T extends string , A extends string[] = []> = T extends `${infer First}${infer Rest}` ? StringToUnion<Rest,[...A,First]>: A[number]