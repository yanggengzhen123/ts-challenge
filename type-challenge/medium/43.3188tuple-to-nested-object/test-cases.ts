// 给定一个只包含字符串类型的元组类型 T 和一个类型 U，递归地构建一个对象。
// type a = TupleToNestedObject<['a'], string> // {a: string}
// type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
// type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]