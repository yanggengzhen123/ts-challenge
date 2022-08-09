// Record<string,never>对象
type aa = 0 | '' | false | [] | Record<string,never>
type AnyOf<T extends readonly any[]> = T extends [infer First,...infer Rest] ? First extends aa ? AnyOf<Rest> :true : false