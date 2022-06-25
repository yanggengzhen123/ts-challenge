// 第一种解法
// T extends [] 在js中就是T === []
// <First<[]>, never>, 不通过是因为 First<[]> 返回的是undefined

type First<T extends any[]> = T extends [] ? never : T[0]

// 第二种解法
// js : arr.length === 0 return never
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 第三种写法 数组 T[0] extends T[number] 
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 第四种写法 ( infer 推断，声明一个变量)
//  js写法 ：const [first, ...rest] = arr; return first ? first : "never"
// 看看能否把First解构出去，如果可以的话返回First，否则never
// type First<T extends any[]> = T extends [infer First,... infer Rest] ? First : never
