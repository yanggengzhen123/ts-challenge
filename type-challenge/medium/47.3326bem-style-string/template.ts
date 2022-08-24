// 我自己的暴力解法
// type BEM<B extends string, E extends string[], M extends string[]> = M extends [] ? `${B}__${E[0]}` : E extends [] ? merge<`${B}`, M> : merge<`${B}__${E[0]}`, M>
// type merge<B extends string, T extends string[], Array extends string[] = []> = T extends [infer First extends string, ...infer Rest extends string[]] ? merge<B, Rest, [...Array, `${B}--${First}`]> : Array[number]
// 别人的解法
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`