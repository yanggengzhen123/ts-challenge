// https://github.com/type-challenges/type-challenges/issues/14088 参考答案
type FlattenDepth<T extends unknown[],K extends number = 1, P extends unknown[] = []> = any