type AppendArgument<Fn, A> = Fn extends (...args: infer B) => infer R
  ? (...args: [...B, A]) => R
  : never;
