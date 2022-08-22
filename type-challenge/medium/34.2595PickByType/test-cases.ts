// 从 T 中选择一组属性，它们的类型可以赋值给 U
// type OnlyBoolean = PickByType<{
//     name: string
//     count: number
//     isReadonly: boolean
//     isEnable: boolean
//   }, boolean> // { isReadonly: boolean; isEnable: boolean; }
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type cases = [
    Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
    Expect<Equal<PickByType<Model, string>, { name: string }>>,
    Expect<Equal<PickByType<Model, number>, { count: number }>>,
]