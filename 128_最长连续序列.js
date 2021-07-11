// 128. 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9


/**
 * @param {number[]} nums
 * @return {number}
 */
// 做法一:暴力破解 
// var longestConsecutive = function(nums) {
//   if(nums.length===0) return 0;
//   let max=0;
//   let start=0;
//   // 使用reduce比较简单 但是性能和内存稍微会差一点 
//   Array.from(new Set(nums)).sort((a,b)=>a-b).reduce((pre,next,index)=>{
//     if(pre!==next){
//       if(pre+1===next){
//         max=Math.max(index-start,max)
//       }else{
//         start=index
//       }
//     }else{
//       start+=1;
//     }
//     return next;
//   });
//   return max+1;
// };

// 方法二 使用set查找
var longestConsecutive = function(nums) {
  let numsSet=new Set();
  for (let index = 0; index < nums.length; index++) {
    numsSet.add(nums[index]);
  }
  let maxLen=0;
  for (const item of numsSet) {
    let add=1,reduce=1,len=1;
    while(numsSet.has(item+add)){
      numsSet.delete(item+add++)
      len++;
    }
    while(numsSet.has(item-reduce)){
      numsSet.delete(item-reduce++)
      len++;
    }
    maxLen=Math.max(len,maxLen)
  }
  return maxLen;
};

// console.log(longestConsecutive([1,2,0,1]));
// console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,2,1]));