// 参考答案 https://github.com/type-challenges/type-challenges/issues/14093 
interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>] : []