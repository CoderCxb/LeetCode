// 7. 整数反转
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

//! 如果反转后整数超过 32 位的有符号整数的范围 [−2**31,  2**31 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。

// 转成字符串->数组->反转->字符串->number->判断正负和范围
/**
 *
 * @param {number} x 反转前的整数
 * @return {number} 返回反转后的整数
 */
var reverse = function (x) {
  let result =
    +[...x.toString().replace("-", "")].reverse().join("") * (x >= 0 ? 1 : -1);
  if (result > 2 ** 31 - 1 || result < (-2) ** 31) return 0;
  return result;
};

console.log(reverse(1212123));
console.log(reverse(1534236469));
