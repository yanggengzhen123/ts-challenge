type Flatten<T extends unknown[]> = T extends [infer F, ...infer Rest]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<Rest>]
    : [F, ...Flatten<Rest>]
  : [];
