// 4. 寻找两个正序数组的中位数

// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 1.思路一: 合并成一个数组 然后排序之后去中位数(简单并且效率低 不写)
// 2.思路二: 同时遍历两个数组 哪个数组的值小 哪个数组的index向后移动 等到两个数组的index加起来是中位数的坐标时 返回结果(奇偶判断)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 结果
  let result=0; 
  // i1:nums1下标 i2:nums2下标  len总长度  
  let i1=0,i2=0,len=nums1.length+nums2.length;
  // count:遍历次数(等价于i1+i2) odd:是否偶数
  let count=0,odd=len%2===0;
  // 遍历一半多点就好了 因为后面的肯定不是
  while(count<=Math.ceil(len/2)){
    // n1,n2为当前的值 当为undefined时 设置为无穷大 确保另一个数组的值一定比这个小 因为是每次都是将小的那个值的数组下标往后移
    let n1=nums1[i1]!==undefined?nums1[i1]:Infinity;
    let n2=nums2[i2]!==undefined?nums2[i2]:Infinity;
    // 不要直接写n1&&n2 因为0的时候默认会判定为false
    if(n1!=undefined&&n2!=undefined){
      // 移动数组下标(谁的值小 移动谁)
      if(n1>=n2) i2++;
      else i1++;
    }
    // 数组时 中位数有两个
    if(odd){
      if(count===Math.floor(len/2)-1||count===Math.floor(len/2)){
        result+=Math.min(n1,n2)
      }
    }else{
      if(count===Math.floor(len/2))result+=Math.min(n1,n2)
    }
    count++;
  }
  return result/(odd?2:1);
};

console.log(findMedianSortedArrays([1,2,3,4],[]));