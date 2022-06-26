import type { Equal } from "@type-challenges/utils";
// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false
export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest,U>
  : false;
// 因为ts涉及到数组，但返回值不是object而是布尔，所以不用用 [P in keyof K]这种，所以考虑用递归
