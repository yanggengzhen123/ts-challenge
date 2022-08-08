// 转换成数组，计算长度
type LengthOfString<
  S extends string,
  A extends string[] = []
> = S extends `${infer F}${infer L}`
  ? LengthOfString<L, [...A, F]>
  : A["length"];
