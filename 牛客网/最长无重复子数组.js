// 最长无重复子数组
// 描述
// 给定一个数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。
// 子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组

// 思路: 使用双指针+hash的方式
// hash用来维护start~end之间是否存在
// 当元素存在时,start移动到前一个重复元素
// 当元素不存在时，存hash，end++
function maxLength( arr ) {
  // 1. 特殊情况处理
  if(arr.length<=1) return arr.length;
  // 2. 初始化双指针
  let start=0,end=0;
  // 3. hash表
  let hash={};
  // 4. 最大值
  let max=0;
  // 5. end<arr.length时
  while(end<arr.length){
    // 6. 获取尾指针的值
    let e=arr[end];
    // 7. hash存在
    if(hash[e]){
      // 8. 循环
      while(start<=end){
        // 9. 删除hash
        hash[arr[start]]=false;
        // 10. 不断移动start直到将重复元素排除
        if(arr[start]!==arr[end]){
          start++;
        }else{
          start++;
          // 11. 排除之后需要break
          break
        }
      }
    }else{
      // 12. hash不存在 直接添加 end后移
      hash[e]=true;
      end++;
    }
    // 13. 取最大值
    max=Math.max(max,end-start)
  }
  return max;
}

console.log(maxLength([5,8,7,4,1,5,5,4,4]));
console.log(maxLength([2,2,3,4,8,99,3]));