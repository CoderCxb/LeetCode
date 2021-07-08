// 125. 验证回文串
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 输入: "race a car"
// 输出: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	// 1. 特殊情况处理
	if (s.length === 0) return false;
	// 2. 字母和数字的正则
	let regExp = /[0-9a-zA-Z]/;
	// 3. 双指针下标
	let start = 0,
		end = s.length - 1;
	// 4. 循环
	while (start < end) {
		// 5. 如果不是字母和数字直接跳过 要确保字符不是undefined,否则会进死循环
		while (!regExp.test(s.charAt(start)) && s.charAt(start)) {
			start++;
		}
		while (!regExp.test(s.charAt(end)) && s.charAt(end)) {
			end--;
		}
		// 6. 经过5以后 如果还不是数字和字母或者是相同字母和数字,则移动左右指针
		if (
			!regExp.test(s.charAt(start)) ||
			s.charAt(start).toUpperCase() === s.charAt(end).toUpperCase()
		) {
			start++, end--;
			// 7. 不同的字母和数字 则直接返回false
		} else {
			return false;
		}
	}
	// 8. 能走到这 说明是回文
	return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('.,'));
