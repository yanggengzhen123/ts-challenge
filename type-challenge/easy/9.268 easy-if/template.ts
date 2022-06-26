// 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。
type If<C extends boolean, T, F> = C extends true ? T : F

// 涉及知识点：null在严格模式下和非严格模式下的区别
// https://www.bilibili.com/video/BV13Y4y1k76v/?spm_id_from=pageDriver&vd_source=f75d6767eae14ee4ef4f79821b5268ff
// tsconfig.json "strict": true, "strictNullChecks": true, 