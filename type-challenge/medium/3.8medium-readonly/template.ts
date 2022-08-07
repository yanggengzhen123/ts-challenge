// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     readonly [P in keyof T]: T[P]
// } & {
//         -readonly [P in Exclude<keyof T, K>]: T[P]
//     }
type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in keyof T]: T[P]
} & {
        -readonly [P in keyof T as P extends K ? never : P]: T[P]
    }