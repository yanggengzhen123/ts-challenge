// 实现一个将接收到的String参数转换为一个字母Union的类型。
// type Test = '123';
// type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
const aa = ['name', 'age', 'location', 'email'] as const;
type A = aa[number];