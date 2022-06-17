// 5. 最长回文子串

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩展法
// 思路就是 遍历每个元素 然后从该元素左右两侧作判断
// a) 左右字符相等直接添加 并且左右距离+1
// b) 左右字符不同判断目前字符串是否是一个纯字符串(只有一种元素) 初始默认为纯字符串(单个元素) 纯字符串时,判断和原本的纯字符串是否是相同字符,是则添加并移动,否则不操作

var longestPalindrome = function (s) {
  // 1. 结果
  let result = "";
  // 2. 遍历
  for (let index = 0; index < s.length; index++) {
    // 3.初始化
    let palindrome = s[index], // 最大回文子串
      pure = true, // 是否纯字符
      preDiff = 1, // 左边移动距离
      nextDiff = 1; // 右边移动距离
    // 4. 循环
    while (true) {
      // 5. now中点字符   pre 左移后的字符 next 右移后的字符
      let next = s[index + nextDiff],
        pre = s[index - preDiff],
        now = s[index];
      // 6. 如果左右字符相同
      if (next === pre && next && pre) {
        // 7. 直接添加
        palindrome = pre + palindrome + next;
        // 8. 判断是否和中点字符相同 不同的时候要将pure设置为false 表示不是纯字符串了
        if (next !== now) pure = false;
        // 9. 左右移动
        preDiff++;
        nextDiff++;
        // 10.左右字符不同
      } else {
        // 11. 左字符和中点相同 并且是纯字符串
        if (pre === now && pure) {
          // 12. 拼接并左移
          palindrome = pre + now;
          preDiff++;
          // 13. 右字符和中点相同 并且是纯字符串
        } else if (now === next && pure) {
          // 拼接并右移
          palindrome += next;
          nextDiff++;
          // 14. 否则 跳出循环
        } else {
          break;
        }
      }
      // 15. 当next或者pre不存在的时候 也跳出循环
      if (!next && !pre) {
        break;
      }
    }
    // 16. 判断回文子串的长度是否大于result的长度 大于的时候才会赋值
    if (palindrome.length > result.length) result = palindrome;
  }
  // 17. 返回结果
  return result;
};

console.log(longestPalindrome("baba"));
