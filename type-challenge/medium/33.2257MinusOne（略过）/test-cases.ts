// 给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
// type Zero = MinusOne<1> // 0
// type FiftyFour = MinusOne<55> // 54

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]