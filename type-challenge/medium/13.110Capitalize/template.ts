// Uppercase 内置转化为大写
type MyCapitalize<S extends string> = S extends `${infer X}${infer Y}` ? `${Uppercase<X>}${Y}` : ''