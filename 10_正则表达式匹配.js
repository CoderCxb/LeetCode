// 10. 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 动态规划解法
// 可以将dp打印出来 然后观察 最好是通过画图
var isMatch = function (s, p) {
  // 创建一个二维数组
  let sLen = s.length,
    pLen = p.length;
  let dp = new Array(pLen + 1);
  for (let i = 0; i <= pLen; i++) {
    dp[i] = new Array(sLen + 1).fill(false);
  }
  dp[0][0] = true;
  // *的第一个元素需要设置为true
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == "*") dp[j][0] = dp[j - 2][0];
  }
  // 遍历
  for (let si = 1; si < sLen + 1; si++) {
    for (let pi = 1; pi < pLen + 1; pi++) {
      // s和p匹配或p的值为.时
      if (s[si - 1] === p[pi - 1] || p[pi - 1] === ".") {
        // 对应的二维数组的值为其左上角值
        dp[pi][si] = dp[pi - 1][si - 1];
      } else if (p[pi - 1] === "*") {
        // 当值不等 并且p的值为*时
        if (s[si - 1] == p[pi - 2] || p[pi - 2] == ".") {
          // 如果*前一个字符等于s的前一个字符 则二维数组的值如下
          dp[pi][si] = dp[pi - 2][si] || dp[pi - 2][si - 1] || dp[pi][si - 1];
        } else {
          dp[pi][si] = dp[pi - 2][si];
        }
      }
    }
  }
  // console.log(dp);
  return dp[pLen][sLen];
};

console.log(isMatch("aab", "c*a*b*"));
