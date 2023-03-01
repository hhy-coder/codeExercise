  //快速排序经典写法
  function quikSort(arr,l,r) {
    //子数组长度为1时终止递归
    if(l>=r){
      return 
    }
    console.log(l,r)
    //哨兵划分
    let pivot = arr[l]
    let left = l,right = r
    while(left<right){
      // 从右往左 找到第一个小于pivot的数  从左到右找到第一个大于pivot的数
      while(arr[right] >= pivot && left<right) right--
      while(arr[left] <= pivot && left<right) left++  
      if(left<right){
     let  temp = arr[left]
        arr[left ]  = arr[right]
        arr[right] = temp
      }
    }
    //将pivot换到中间
  let value = arr[left]
    arr[left] = arr[l]
    arr[l] = value
    //递归左右
    quikSort(arr,l,left-1)
    quikSort(arr,left+1,r)
  }
  let arr = [3,2,1,4,5,7,2,4,7,1]
  quikSort(arr,0,arr.length-1)
  console.log(arr)