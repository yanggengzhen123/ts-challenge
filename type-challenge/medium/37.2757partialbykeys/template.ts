type PartialByKeys<T, K = keyof T> = VK<{
    [P in keyof T as P extends K ? P : never]?: T[P]
} & {
        [P in keyof T as P extends K ? never : P]: T[P]
    }>

type VK<T> = {
    [P in keyof T]: T[P]
}