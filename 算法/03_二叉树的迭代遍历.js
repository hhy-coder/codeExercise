//前序遍历 中左右
function  preorderTraversal(root) {
  let stack = [],res=[]
  stack = [root]
  let val = null
  if(stack.length){
    val = stack.pop()
    res.push(val.value)
  val.right && stack.push(val.right)
  val.left && stack.push(val.left)
  }
  return res
}

//中序遍历 左右中
function inorderTraversal(root) {
  let stack = [],res =[]

}