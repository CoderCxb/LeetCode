// 8. 字符串转换整数 (atoi)
/**
 * @param {string} s 
 * @return {number}
 */

//  函数 myAtoi(string s) 的算法如下：
 
//  读入字符串并丢弃无用的前导空格
//  检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
//  读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
//  将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
//  如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
//  返回整数作为最终结果。
//  注意：
 
//  本题中的空白字符只包括空格字符 ' ' 。
//  除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 

var myAtoi = function (s) {
	let result = [];
	// 1.是否正数
	let positive = true;
	// 2.用于判断是否整数
	let numStrs='0123456789';
	// 3.去除空白
	s = s.trim();
	// 4. -开头 打个负数的标记
	if(s.startsWith('-'))positive=false;
	// 5. - + 0 开头时
	if(s.startsWith('0')||s.startsWith('-')||s.startsWith('+')){
		// 6. 去掉开头
		s=s.substring(1)
		for (const iterator of s) {
			// 7. 只接收数字
			if(numStrs.includes(iterator)){
				result.push(iterator)
			}else break;
		}
	}else{
		// 8. 正常开头时
		for (const iterator of s) {
			// 9.碰到数字就push 否则就停止
			if(numStrs.includes(iterator)){
				result.push(iterator)
			}else break;
		}
	}
	// 10. 计算值
	let resultNum = Number(result.join('')) * (positive ? 1 : -1);
	// 11. 超出范围时的处理
	if (resultNum >= 2 ** 31) {
		resultNum = 2 ** 31 - 1;
	}
	if (resultNum < -(2 ** 31)) {
		resultNum = -(2 ** 31);
	}
	// 12. 避免返回 -0的情况
	return resultNum!=0?resultNum:0;
};

console.log(myAtoi('aa'));
