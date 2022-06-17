// 32.最长有效括号
// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

// 示例 1：

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"
// 示例 2：

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"
// 示例 3：

// 输入：s = ""
// 输出：0

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 1. 最大值记录
  let max = 0;
  // 2. 初始栈(存储的是index) -1 作用如下
  // 是为了让从头开始匹配的字符串有效 同时也是因为数组的index会小1的问题
  // 保证stack永不为空
  const stack = [-1];
  // 3. 遍历
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === "(") {
      // 4. 入栈
      stack.push(i);
    } else {
      // 5. 出栈
      stack.pop();
      // 6. 当c为)是i-stack的最后一个元素 就是当前匹配的有效
      if (stack.length > 0) {
        max = Math.max(i - stack[stack.length - 1], max);
        // 7. 当栈空了以后
      } else {
        // 8.下标入栈
        stack.push(i);
      }
    }
  }
  return max;
};
console.log(longestValidParentheses("()()"));
