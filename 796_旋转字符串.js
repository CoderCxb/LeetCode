// 796. 旋转字符串

// A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。如果在若干次旋转操作之后，A 能变成B，那么返回True。

// 示例 1:
// 输入: A = 'abcde', B = 'cdeab'
// 输出: true

// 示例 2:
// 输入: A = 'abcde', B = 'abced'
// 输出: false

// 注意：
// A 和 B 长度不超过 100。

// 思路：将字符串直接重复一遍(相当于全部字符都旋转了)  如果包含第二个字符串 则就是旋转字符串

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
	return A.length != B.length ? false : (A + A).includes(B);
};

console.log(rotateString('abcde', 'cdeab'));
