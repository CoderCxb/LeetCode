// 504. 七进制数
// 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

// 输入: num = 100
// 输出: "202"

// 输入: num = -7
// 输出: "-10"

// 思路: 以120举例, 每次%7以后, absNum要除以7并向下取整,因为后一位得到了,可以不参与计算了
// 120 % 7 = 1, res = '1', absNum = Math.floor(120 / 7) = 17
// 17 % 7 = 3, res = '31', absNum =  Math.floor(17 / 7) = 2
// 2 % 7 = 2, res = '231', absNum =  Math.floor(2 / 7) = 0

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let res = "";
  let isNegative = num < 0;
  let absNum = Math.abs(num);
  while (absNum > 0) {
    res = (absNum % 7) + res;
    absNum = Math.floor(absNum / 7);
  }
  if (isNegative) res = "-" + res;
  return res ? res : "0";
};

console.log(convertToBase7(120));
console.log(convertToBase7(-7));
console.log(convertToBase7(-1));
console.log(convertToBase7(8));
