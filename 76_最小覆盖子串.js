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
	// 1. 滑块范围
	let left = 0,
		right = 0;
	// 2. need存储t key为字符 value为字符出现的次数
	let need={};
	// 3. window存储滑块中已有的字符
	let window={};
	// 4. 初始化need 和 window 
	for (const c of t) {
		need[c]=need[c]===undefined?1:need[c]+1;
		window[c]=0;
	}
	// 5. 重要:用来存储window(滑块)中出现次数足够的字符的数量
	let charOkCount=0;
	// 6. 需要返回的结果的起始位置和长度
	let start=0,len=Number.MAX_SAFE_INTEGER;
	// 7. 遍历
	while(right<s.length){
		// 8. 获取right下标对应的字符
		let char=s[right]
		// 9. 在need中找 如果不为undefined 则说明是需要的(need中有)
		if(need[char]!==undefined){
			// 10. 将滑块中的该字符的次数++
			window[char]++;
			// 11. 如果滑块的次数和需要的次数相同 则valid++
			if(window[char]===need[char]){
				// 12. window中符合的字符数
				charOkCount++;
			}
		}
		right++;
	}
	// 13. 当valid和need中keys的长度相等 表示已经满足了 此时要开始移动left
	while(charOkCount==Object.keys(need).length){
		// 14. 判断right-left和len的关系 只有长度更小的时候才要替换
		if(right-left<len){
			start=left;
			len=right-left;
		}
		// 15. left开始移动
		let d=s[left];
		left++;
		// 16. 在need中找 如果不为undefined 则说明是需要的(need中有)
		if(need[d]!==undefined){
			// 17.滑块中的该字符次数--
			window[d]--;
			// 18. 因为window[d]--在后面 虽然这里相等了
			if(window[d]<need[d]){
				charOkCount--;
			}
		}
	}
	// 19. 返回结果
	return len===Number.MAX_SAFE_INTEGER?'':s.substr(start,len);
};

console.log(minWindow('ADOBECODEBAANC', 'ABC'));
