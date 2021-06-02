// 167. 两数之和 II - 输入有序数组
// 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。

// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//   let result=[];
//   let obj={};
//   for (let index = 0; index < numbers.length; index++) {
//     let item=numbers[index];
//     if(item in obj) result=[obj[item]+1,index+1];
//     else obj[target-item]=index;
//   }
//   return result;
// };

// 方法二:因为是有序数组 使用双指针
var twoSum = function(numbers, target) {
  // 1.初始化左右指针
  let left=0,right=numbers.length-1;
  // 2.遍历条件
  while(numbers[left]+numbers[right]!==target&&left<=right){
    // 3. 取和
    let sum=numbers[left]+numbers[right];
    // 4. 移动
    if(sum>target){
      right--;
    }else if(sum<target){
      left++
    }else{
      break
    }
  }
  return [left+1,right+1]
};
console.log(twoSum([2,7,11,15], 9));