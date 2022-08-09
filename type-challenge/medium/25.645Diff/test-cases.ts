// 获取两个接口类型中的差值属性。
// type Foo = {
//   a: string;
//   b: number;
// }
// type Bar = {
//   a: string;
//   c: boolean
// }
// type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
// type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]