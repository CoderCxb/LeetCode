// 438. 找到字符串中所有字母异位词
// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

// 说明：

// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。
// 示例 1:

// 输入:
// s: "cbaebabacd" p: "abc"

// 输出:
// [0, 6]

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	if (p.length > s.length) return [];
	let result = [];
	let left = 0,
		right = 0;
	let need = {};
	let window = {};
	let charOkCount = 0;
	for (const c of p) {
		need[c] = need[c] === undefined ? 1 : need[c] + 1;
		window[c] = 0;
	}
	let nKeyLen = Object.keys(need).length;
	for (; right < s.length; ) {
		let c = s[right];
		right++;
		if (need[c] !== undefined) {
			window[c]++;
			console.log(need[c], window[c]);
			if (need[c] === window[c]) {
				charOkCount++;
			}
		}
		if (charOkCount === nKeyLen) {
			result.push(left);
		}
		while (right - left >= p.length) {
			let d = s[left];
			left++;
			if (need[d] !== undefined) {
				if (need[d] === window[d]) {
					charOkCount--;
				}
				window[d]--;
			}
		}
	}
	return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
