type TupleToNestedObject<T extends unknown[], U> = T extends [infer R, ...infer Rest] ? {
    [K in R as R extends PropertyKey ? R : never]: TupleToNestedObject<Rest, U>
} : U

// PropertyKey === string | number | symbol