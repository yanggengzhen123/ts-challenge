// 实现刚刚翻转对象的类型
// Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
// Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
// Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,
]