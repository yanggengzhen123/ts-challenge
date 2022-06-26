/*
 * @Author: yanggengzhen 15017290625@163.com
 * @Date: 2022-06-26 15:58:35
 * @LastEditors: yanggengzhen 15017290625@163.com
 * @LastEditTime: 2022-06-26 17:44:03
 * @FilePath: \ts-challenge\type-challenge\7.43 Exclude\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from '@type-challenges/utils'
type aa = Exclude<'a' | 'b' | 'c', 'a'> //排除了'a'
type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]