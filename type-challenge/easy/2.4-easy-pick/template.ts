
// T接口 K key 联合类型
// keyof T 获取 interface T 的所有 key值
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}