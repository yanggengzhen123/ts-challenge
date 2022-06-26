// 实现内置的Exclude <T, U>类型，但不能直接使用它本身。
// 从联合类型T中排除U的类型成员，来构造一个新的类型。
// 两个联合类型数组 双循环做比较
type MyExclude<T, U> = T extends U ? never : T 

type t1 = 'a' | 'b' | 'c'
type t2 = 'a' 
type test =  MyExclude<t1,t2>