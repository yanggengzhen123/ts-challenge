// 从 T 中选择一组其类型不可赋值给 U 的属性。
// type OmitBoolean = OmitByType<{
//     name: string
//     count: number
//     isReadonly: boolean
//     isEnable: boolean
// }, boolean> // { name: string; count: number }
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]