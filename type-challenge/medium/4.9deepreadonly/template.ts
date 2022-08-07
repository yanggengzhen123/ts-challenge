// 需要排除function的情况
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object
    ? T[P] extends Function
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P];
};
