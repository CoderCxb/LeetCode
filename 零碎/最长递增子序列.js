/**
 * @param {Array<number>} arr
 */
function longestIncreasingSubsequence(arr) {
  // 存放结果
  let res = [];
  // 存储每个位置对应的最大递增子序列, 初始化时设置为自身
  const stage = arr.map((item) => [item]);
  for (let i = 0; i < arr.length; i++) {
    let n = i;
    // 向前遍历寻找更小值
    while (n--) {
      let lastNum = stage[n].slice(-1)[0]; // 获取最后一个元素
      // 比当前值小 并且最大递增子序列长度大于等于当前值的最大递增子序列长度, 进行替换
      if (arr[i] > lastNum && stage[n].length >= stage[i].length) {
        stage[i] = [...stage[n], arr[i]];
      }
      // 存储最大递增子序列
      if (stage[i].length > res.length) {
        res = stage[i];
      }
    }
  }
  return res;
}

// stage存储的每一个位置元素对应的最大递增子序列
// [
//   [ 1 ],
//   [ 1, 2 ],
//   [ 1, 2, 3 ],
//   [ 1, 2, 3, 4 ],
//   [ 1 ],
//   [ 1, 2 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5, 6 ]
// ]

console.log(longestIncreasingSubsequence([1, 2, 3, 4, 1, 2, 5, 6]));


console.log(longestIncreasingSubsequence(['d', 'e', 'b', 'f', 'h','j','i','l','c']));