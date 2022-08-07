// type Chainable<T = {}> = {
//     option<K extends string, V = any>(key: K extends keyof T ? never : K, value: V): Chainable<T & { [O in K]: V }>
//     get(): T
// }
type Chainable<T extends { [k: string]: unknown } = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & { [k in K]: V }>
    get(): T
}