// 将字符串文字类型的第一个字符转换为小写 Uncapitalize
// 将字符串文字类型转换为小写 Lowercase
type KebabCase<S extends string> = S extends `${infer F}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<F>}${KebabCase<Rest>}`
    : `${Lowercase<F>}-${KebabCase<Rest>}`
  : S;
