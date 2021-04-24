// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 思路: 将()左右括号做成对象映射 这样可以根据左括号找到右括号,然后使用一个数组作为队列，当遇到左括号时 将其推入，遇到右括号时 判断数组最后一个元素是否是其左括号 如果是 则将该左括号移除，如果字符串有效，则所有左括号会被移除 数组长度为0

/**
 *
 * @param {string} s 括号字符串
 * @return {boolean} 括号字符串是否有效
 */
var isValid = function (s) {
	// 1. 长度非偶直接false
	if (s.length % 2 === 1) return false;
	// 括号对象 将起始括号和结束括号对应起来
	let closeChar = {
		'[': ']',
		'{': '}',
		'(': ')',
	};
	// 2. s对应的数组
	let sArr = [];
	// 3. 遍历字符串
	for (let index = 0; index < s.length; index++) {
	// 4. 如果数组的最后一个元素和遍历到的s的字符 是闭合关闭  则移除数组的最后一个元素
		if (closeChar[sArr[sArr.length - 1]] === s[index]) {
			sArr.pop();
		} else {
	// 5. 否则 将这个字符添加到数组
			sArr.push(s[index]);
		}
	}
	// 6. 若sArr为空 则说明括号闭合都是有效的
	return sArr.length === 0;
};

console.log(isValid('()[]{]'));
