// 567. 字符串的排列

// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").

// 思路：利用滑动窗口,将滑动窗口的长度控制的和s1一致,然后不断的往前移动,每次都需要记录当前滑动窗口(window)和需要的字符情况(need) 并做判断 当window中的字符数都满足的时候 就说明存在

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	// 1. 初始化滑动窗口的范围
	let left = 0,
		right = 0;
	// 2. need记录需要的字符 window记录滑动窗口中已有的字符 value为出现的次数
	let need = {};
	let window = {};
	// 3. 符合window中和need,key和value都相同的个数 即符合条件
	let charOkCount = 0;
	// 4. 初始化need和window
	for (let c of s1) {
		need[c] = need[c] === undefined ? 1 : need[c] + 1;
		window[c] = 0;
	}
	// 5. need的key的数量
	let nKeysLen = Object.keys(need).length;
	// 6. 遍历
	for (; right < s2.length; ) {
		// 7. right对应字符
		let char = s2[right];
		right++;
		// 8. right对应的字符在s1中 即是需要的(need)
		if (need[char] !== undefined) {
			// 9. 滑动窗口中记录++
			window[char]++;
			// 10. 如果窗口中的字符数满足 则charOkCount++
			if (window[char] === need[char]) {
				charOkCount++;
			}
		}
		// 11. 当窗口长度大于s1.length时
		while (right - left >= s1.length) {
			// 12. 合法的字符数足够 则返回true
			if (charOkCount === nKeysLen) {
				return true;
			}
			// 13. 判断左边的元素
			let d = s2[left++];
			// 14. 如果这个元素是需要的
			if (need[d] !== undefined) {
				// 15. 如果原本是满足条件的 那么接下去要-- 所以会不满足
				// 因此 charOkCount--
				if (need[d] === window[d]) {
					charOkCount--;
				}
				// 16. 滑动窗口中该字符数要--
				window[d]--;
			}
		}
	}
	// 17. 能执行到这就说明s2中没有满足条件的字符串
	return false;
};
console.log(checkInclusion('hello', 'ooolleoooleh'));
console.log(checkInclusion('ab', 'ab'));
console.log(checkInclusion('pqzhi', 'ghrqpihzybre'));
