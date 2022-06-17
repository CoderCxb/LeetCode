// 93. 复原 IP 地址
// 难度： 中等
// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

// 示例 1：

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
// 示例 2：

// 输入：s = "0000"
// 输出：["0.0.0.0"]

// 思路: 通过回溯的方式遍历

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];
  function traverse(str, strArr) {
    // str为空则遍历完毕
    if (!str) {
      // 遍历完并且 数组长度为4 则是结果之一
      if (strArr.length === 4) {
        res.push(strArr);
      }
      return;
    }
    // 以0开头 直接添加
    if (str.startsWith("0")) {
      traverse(str.slice(1), [...strArr, "0"]);
      return;
    }

    // 不以0开头
    let length = 1;
    let validStr = str.slice(0, length);
    // 当validStr<256时回溯
    while (+validStr < 256) {
      let nStrArr = [...strArr, validStr];
      traverse(str.slice(length), nStrArr);
      if (validStr === str) {
        return;
      }
      validStr = str.slice(0, ++length);
    }
    return;
  }
  traverse(s, []);
  return res.map((v) => v.join("."));
};

console.log(restoreIpAddresses("255254253252"));
console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("1000"));
console.log(restoreIpAddresses("101023"));
