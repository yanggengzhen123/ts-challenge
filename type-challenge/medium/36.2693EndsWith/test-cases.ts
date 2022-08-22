// 实现EndsWith<T, U>,接收两个string类型参数,然后判断T是否以U结尾,根据结果返回true或false
// type a = EndsWith<'abc', 'bc'> // expected to be true
// type b = EndsWith<'abc', 'abc'> // expected to be true
// type c = EndsWith<'abc', 'd'> // expected to be false

import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]