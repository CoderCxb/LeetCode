// 387. 字符串中的第一个唯一字符
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// s = "leetcode"
// 返回 0

// s = "lovel
// 返回 2

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	// 1. 对象存储s中字母出现次数
	let map = {};
	for (const c of s) {
		map[c] = map[c] === undefined ? 1 : map[c] + 1;
	}
	// 2. 遍历s,如果字母出险次数为1 则直接返回
	for (let index = 0; index < s.length; index++) {
		if (map[s[index]] === 1) {
			return index;
		}
	}
	// 3. 否则返回 -1
	return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
