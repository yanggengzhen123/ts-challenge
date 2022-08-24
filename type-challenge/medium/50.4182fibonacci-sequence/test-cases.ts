// 实现一个通用的斐波那契 < T > 接受一个数字 T 并返回它的对应斐波那契数列。
// 序列开始: 1,1,2,3,5,8,13,21,34,55,89,144
// type Result1 = Fibonacci<3> // 2
// type Result2 = Fibonacci<8> // 21
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]