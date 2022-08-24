// 实现一个类型 IsNever，它接受输入类型 T。如果类型解析为 never，则返回 true，否则返回 false。
// type A = IsNever<never>  // expected to be true
// type B = IsNever<undefined> // expected to be false
// type C = IsNever<null> // expected to be false
// type D = IsNever<[]> // expected to be false
// type E = IsNever<number> // expected to be false

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]