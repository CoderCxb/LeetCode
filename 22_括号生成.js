//  22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

// 思路: 回溯(递归) 判断情况 有点类似于树的结构
// 左括号数必然要>右括号数
// 1. 左括号数 <n  可以添加(或)
// 2. 左括号数===n 只能添加)

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 1. 结果数组
  let result = [];
  // 2. 递归函数
  function helper(lCount, rCount, str) {
    // 3. 长度满足 添加到数组
    if (str.length === 2 * n) {
      result.push(str);
    }
    // 4. 左括号数>=右括号数
    if (lCount >= rCount) {
      // 5. lCount未达到n 即还可以添加(
      if (lCount < n) {
        helper(lCount + 1, rCount, str + "(");
      }
      // 6. 无论lCount是否达到n 都可以添加)
      helper(lCount, rCount + 1, str + ")");
    }
  }
  helper(0, 0, "");
  return result;
};

console.log(generateParenthesis(5));
