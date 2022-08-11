// 判断是否是联合类型
type IsNever1<T> = [T] extends [never] ? true : false;
type IsUnion<T extends any, O = T> = IsNever1<T> extends true
  ? false
  : T extends O
  ? [O] extends [T]
    ? false
    : true
  : never;

//  T extends O 是前提条件 =>  (string extends string | number) | (number extends string |number)

`解释一下原理，利用分布条件类型，extends会应用于联合类型的每个成员
例子1：IsUnion<string|number>
1、先解释T extends O ?
我们以为：string | number extends string | number
实际上是：(string extends string | number) | (number extends string |number)?
即：T有两种类型：string、number
2、此时[T] 为 ：[string] | [number]，而[O]为extends后面的东西，没有被分布条件类型分布，所以此时[O]为：[ string|number ]
3、比较[O] extends [T]，在该情况下 extends 不成立，返回true。
我们再看看 只传单个类型的情况
例子2：isUnion<string>
利用分布条件类型，T也只有一种类型，此时[T]为[string]，[O]为[string]，该情况下extends成立，返回false。`