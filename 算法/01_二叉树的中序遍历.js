// 中序遍历 迭代法
const inorderTraversal = (root) => {
    let list = []
    let stack = []
    let node = root
    
    while(node || stack.length) {
    // 遍历左子树
      while(node) {
       stack.push(node)
        node = node.left
        console.log(node);
      }
      console.log(stack);
      node = stack.pop()
      list.push(node.val)
      console.log(list);
      node = node.right
    }
    return list
}

let root = [1,2,3,4,5,6,7]
inorderTraversal(root)