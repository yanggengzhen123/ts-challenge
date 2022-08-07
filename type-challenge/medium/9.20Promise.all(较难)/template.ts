// [...T]数组转换成元组类型，这样才能知道数量
declare function PromiseAll<T extends any[]>(values: readonly [...T]):
  Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;
