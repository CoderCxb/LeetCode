// 3. 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 提示：
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

// 思路：使用一个数组存在字符，当字符已经不在数组中时，将其添加到数组，数字存在时，从该字符后一位开始重新计算(使用slice比较方便)

/**
 *
 * @param {string} s 接收的字符串
 * @return {number} 返回最长无重复字符子串的长度
 */
var lengthOfLongestSubstring = function (s) {
	// 1. 记录最大长度
	let maxlen = 0;
	// 2. 用于存放未重复的字符串 可以使用数组 也可以使用字符串
	let sArr = [];
	// 3. 遍历传入的字符串
	for (let index = 0; index < s.length; index++) {
		// 4. 当字符串已存在时 去除与该字符重复的字符以及它前面的所有字符 继续计算
		if (sArr.includes(s[index])) {
			sArr.push(s[index]);
			sArr = sArr.slice(sArr.indexOf(s[index]) + 1);
		} else {
			// 5. 当字符不存在时 添加
			sArr.push(s[index]);
		}
		// 6. 计算最大值
		maxlen = Math.max(sArr.length, maxlen);
	}
	return maxlen;
};

console.log(lengthOfLongestSubstring('afsf1fsaffasfdsa'));
