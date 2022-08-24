type reverse<T> = T extends [...infer A, infer B] ? [B, ...reverse<A>] : []
type FlipArguments<T extends Function> = T extends (...args: infer A) => infer B ? (...arg: reverse<A>) => B : T