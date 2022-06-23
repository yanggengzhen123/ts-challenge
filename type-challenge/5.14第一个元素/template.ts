// 第一种解法
// T extends [] 在js中就是T === []
// <First<[]>, never>, 不通过是因为 First<[]> 返回的是undefined
type First<T extends any[]> = T extends [] ? never : T[0]

