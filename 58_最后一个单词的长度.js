// 58. 最后一个单词的长度
// 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 输入：s = "Hello World"
// 输出：5

// 输入：s = " "
// 输出：0
 
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // 1. 先去除左右空格 再根据空格对字符串进行切割
  let sArr=s.trim().split(' ');
  // 2. 如果切割出来的长度为0 则直接返回0 
  if(sArr.length==0) return 0;
  // 3. 获取最有一个单词
  let lastWord = sArr[sArr.length-1];
  // 4. 遍历
  for (const c of lastWord) {
    // 5. 如果等于自身 则说明是数字 直接返回 0
    if(+c===+c){
      return 0;
    }
  }
  // 6. 能走到这 说明最后一个单词是合法的 直接返回长度
  return lastWord.length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('a '));