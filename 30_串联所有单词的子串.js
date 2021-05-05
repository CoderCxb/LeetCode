// 30. 串联所有单词的子串
// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
	// 1. 结果
	let result = [];
	// 2. words拼接成字符串的长度
	let wordsLen = words.join('').length;
	// 3. 特殊情况处理
	if (!s || !words || !words.length) return [];
	if (s.length < wordsLen) {
		return result;
	}
	// 4. 每个单词的长度
	let wordLen = words[0].length;
	// 5. 循环 循环到s.length-wordsLen+1,因为后续的字符串长度不够
	for (let index = 0; index < s.length - wordsLen + 1; index++) {
		// 6. 计数 记录匹配成功的次数,与words.length相等的时候 表示成功
		let count = 0;
		// 7. 新字符串
		let nS = s.substring(index);
		// 8. 将 words转成对象 键是word,值是count,即word出现的次数
		let newWords = {};
		words.forEach((v) => (newWords[v] = (newWords[v] | 0) + 1));
		// 9. 循环
		while (count < words.length) {
			// 10. 截取nS的一个单词长度
			let key = nS.substr(0, wordLen);
			// 11. 如果值>0 则说明匹配成功
			if (newWords[key] > 0) {
				// 12. count++, 记录匹配成功的次数
				count++;
				// 13. 剩余word的值--, 减到0,则说明没有该word了
				newWords[key]--;
				// 14. 对nS进行裁剪
				nS = nS.substr(wordLen);
				// 15. 如果小于0,则匹配失败
			} else {
				break;
			}
		}
		// 16. 匹配成功
		if (count === words.length) {
			result.push(index);
		}
	}
	// 17. 返回结果
	return result;
};

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']));
console.log(findSubstring('barfoo', ['foo', 'bar']));
console.log(
	findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
);
console.log(
	findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])
);
