type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>
type ObjectEntries<T> = {
    [P in keyof T] -?: [P, RemoveUndefined<T[P]>]
}[keyof T]


// 解法：如何将对象转换成联合类型
// 数组转联合类型用 [number] 作为下标 ['1', '2']['number'] // '1' | '2'
// 对象则是用 [keyof T] 作为下标  type ObjectToUnion<T> = T[keyof T]
// type cc=  [string | undefined] extends [undefined] ? true :false