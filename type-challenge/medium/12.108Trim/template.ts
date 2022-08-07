type E = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${E}${infer X}` | `${infer X}${E}` ? Trim<X> : S