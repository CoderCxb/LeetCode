// 389. 找不同
// 给定两个字符串 s 和 t，它们只包含小写字母。

// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

// 请找出在 t 中被添加的字母。

// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。

// 遍历t并使用Map存储字母出现的次数,然后再遍历s,减去次数,当次数减为0,从Map中删除改字母
// 最后剩下的就是添加的字母

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	// 1. 存储字母出现次数
	let map = new Map();
	// 2. 遍历t
	for (const c of t) {
		// 3. 记录t中字母出现的次数
		let count = map.get(c) ? map.get(c) + 1 : 1;
		map.set(c, count);
	}
	// 4. 去除t中和s重复的字母
	for (const c of s) {
		map.set(c, map.get(c) - 1);
		if (map.get(c) === 0) {
			map.delete(c);
		}
	}
	// 5. 此时Map中剩余的就是添加的字母
	return map.keys().next().value;
};

console.log(findTheDifference('abcd', 'adcbe'));
