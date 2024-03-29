// 实现类型 PercentageParser。根据规则 /^(\+|\-)?(\d*)?(\%)?$/ 匹配类型 T。
// 匹配的结果由三部分组成，分别是：[正负号, 数字, 单位]，如果没有匹配，则默认是空字符串。
// type PString1 = ''
// type PString2 = '+85%'
// type PString3 = '-85%'
// type PString4 = '85%'
// type PString5 = '85'

// type R1 = PercentageParser<PString1> // expected ['', '', '']
// type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
// type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
// type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
// type R5 = PercentageParser<PString5> // expected ["", "85", ""]
import type { Equal, Expect } from '@type-challenges/utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]