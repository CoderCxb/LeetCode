// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 2(abc) 3(def) 4(ghi) 5(jkl) 6(mno) 7(pqrs) 8(tuv) 9(wxyz)

// 示例 1：

// 输入：digits = '23'
// 输出：['ad','ae','af','bd','be','bf','cd','ce','cf']

// 思路：将数字对应的字母数组添加到result,然后遍历后面的每个数字对应的字符串 不断的push
// 例如 23
// result ['','a','b','c']
// result ['','a','b','c','ad','ae','af','bd','be','bf','cd','ce','cf']
// 最后再删除前面不满足条件的字符串

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	// 1 数字和字母的映射关系
	let map = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z'],
	};
	// 2. 结果数组 默认'' 否则长度为0 无法操作
	let result = [''];
	// 3. 长度为0 直接返回
	if (digits.length === 0) return [];
	// 4. 遍历digits
	for (let digit of digits) {
		// 5. 存储result的长度(必要,因为result的长度在接下来的计算中会发生改变 所以要存储下来)
		let len = result.length;
		// 6. 遍历len次 (len的用处就在这)
		for (let j = 0; j < len; j++) {
			// 7. 遍历digit对应的 字母数组
			for (let i = 0; i < map[digit].length; i++) {
				// 8. str的值为 resul中的值+当前遍历到的字母数组的值
				const str = result[j] + map[digit][i];
				result.push(str);
			}
		}
		// 9. 去除前面不合法的字符串
		result = result.slice(len);
	}
	return result;
};
console.log(letterCombinations('23'));
