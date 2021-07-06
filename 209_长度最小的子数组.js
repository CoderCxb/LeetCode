// 209. 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 思路：使用滑动窗口,不断的累加元素,当和(sum) >= 目标值(target)时,窗口左侧移动(start++),  每次遍历,窗口右侧都要移动,每次和(sum) >= 目标值(target)时,记录最小长度。

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // 1. 特殊情况直接返回
  if(nums.length===0) return 0;
  // 2. 初始化 start从-1开始 是为了更好的计算
  let sum=0,start=-1,end=0;
  // 3. 最小长度
  let minLen=Number.MAX_SAFE_INTEGER;
  // 4. 遍历
  for (const num of nums) {
    // 5. 求和
    sum+=num;
    // 6. 当sum>target时
    while(sum>=target){
      // 7. 计算最小长度
      minLen=Math.min(end-start,minLen);
      // 8. 窗口左侧移动 同时sum需要减去start对应的值
      sum-=nums[++start];
    }
    // 9. 窗口右侧移动
    end++;
  }
  // 10. 如果minLen还是初始值,则sum永远小于target,返回0,否则直接返回
  return minLen===Number.MAX_SAFE_INTEGER?0:minLen;
};

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1]));