type Length<T extends readonly any[]> = T["length"]

// 知识点
// 什么是tuple类型，和普通数组有什么区别
// 1、tuple的类型和长度都是固定的，如果定义一个tuple类型的a，a["length"]为数字，但是如果是一个数组类型的话，a["length"]为number
// 2、as const 如果不加的话tesla会变成 string[],如果加上了as const的话就会变成readonly类型