// 415. 字符串相加
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = "";
  let index1 = num1.length - 1;
  let index2 = num2.length - 1;
  let flag = 0;
  while (index1 >= 0 || index2 >= 0) {
    let n1 = num1[index1] ? +num1[index1] : 0;
    let n2 = num2[index2] ? +num2[index2] : 0;
    let sum = n1 + n2 + flag;
    res = (sum % 10) + res;
    flag = sum >= 10 ? 1 : 0;
    index1--;
    index2--;
  }
  return flag ? flag + res : res;
};

console.log(addStrings("123", "11"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));
console.log(addStrings("1", "9"));

console.log(addStrings("584", "18"));
