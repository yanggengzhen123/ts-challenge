// 实现类型版本的数组反转 Array.reverse

// type a = Reverse<['a', 'b']> // ['b', 'a']
// type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]