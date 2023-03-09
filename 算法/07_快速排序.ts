// 定义快速排序函数，参数为待排序的数组
function quickSort(array) {
  // 定义辅助函数，用于排序
  function sort(left, right) {
    // 如果左边的索引比右边的索引大，说明区间内已经没有数据，退出函数
    if (left >= right) {
      return
    }
    // 取出基准数
    let pivot = array[left]
    // 定义两个指针
    let i = left
    let j = right
    // 开始排序
    while (i < j) {
      // 从右边开始搜索，直到找到比基准数小的数
      while (i < j && array[j] >= pivot) {
        j--
      }
      // 如果找到了，则将该数存放在左边
      if (i < j) {
        array[i] = array[j]
        i++
      }
      // 从左边开始搜索，直到找到比基准数大的数
      while (i < j && array[i] <= pivot) {
        i++
      }
      // 如果找到了，则将该数存放在右边
      if (i < j) {
        array[j] = array[i]
        j--
      }
    }
    // 将基准数存放在最终的位置上
    array[i] = pivot
    // 递归处理基准数左边的数据
    sort(left, i - 1)
    // 递归处理基准数右边的数据
    sort(i + 1, right)
  }
  // 调用辅助函数，开始排序
  sort(0, array.length - 1)
  // 返回排序后的数组
  return array
}

// 测试数据
const testArr = [5, 2, 9, 1, 5, 6]
// 调用插入排序函数
const sortedArr = quickSort(testArr)
// 打印结果
console.log(sortedArr)
