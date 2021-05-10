// 76. 最小覆盖子串

// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	let left = 0,
		right = 0;
	let tArr = t.split('');
	while (right < s.length) {
		let index = tArr.indexOf(s[right]);
		if (index === -1) {
			tArr.splice(index, 1);
		}
		right++;
		if (tArr.length === 0) {
			left++;
			tArr = t.split('');
		}
	}
	return s.slice(left, right);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
