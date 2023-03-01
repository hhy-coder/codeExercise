//数据
const items = [
  {
    id: 1,
    name: 'node1',
    parentId: -1
  },
  {
    id: 2,
    name: 'node11',
    parentId: 1
  },
  {
    id: 3,
    name: 'node12',
    parentId: 1
  },
  {
    id: 4,
    name: 'node2',
    parentId: 2
  },
  {
    id: 5,
    name: 'node21',
    parentId: 2
  },
  {
    id: 6,
    name: 'node22',
    parentId: 2
  },
  {
    id: 7,
    name: 'node221',
    parentId: 6
  }
]

const arrayToTree = (arr)=>{
  let res = []
  const getChildren = (res,pid)=>{
   for( let item of arr){
    if(item.parentId == pid){
      let newItem = {
        ...item,
        children:[]
      }
      res.push(newItem)
      getChildren(newItem.children,newItem.id)
    }
   }
  
  }
  getChildren(res,-1)
  const deleteNull = (res)=>{
    res.forEach(item=>{
      if(item.children.length !==0 ){
        deleteNull(item.children)
      }else{
        delete item.children
      }
    })
  }
  deleteNull(res)
 return res
}

console.log(JSON.stringify(arrayToTree(items), null, 2))