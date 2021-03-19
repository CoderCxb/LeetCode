// 6. Z 字形变换

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下： 其实就是

// P   A   H   N
// A P L S I I G
// Y   I   R

// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 思路: 遍历数组 确定元素所在行数 然后将元素放进二维数组
var convert = function (s, numRows) {
	// 1. 一行的时候直接返回
	if (numRows === 1) return s;
	// 2. 创建二维数组
	let sArr = new Array();
	for (let i = 0; i < numRows; i++) {
		sArr.push([]);
	}
	// 3. 当前行数
	let row = 0;
	// 4. true则行数递增 false行数递减
	let direction = true;
	// 5. 遍历字符串
	for (let index = 0; index < s.length; index++) {
		// 6. 将字符添加到当前行数(row)对应的数组sArr[row]
		sArr[row].push(s[index]);
		// 7. 到底之后 改变方向(direction) 开始向上
		if (row === numRows - 1) direction = false;
		// 8. 回到0行(顶部) 改变方向(direction) 开始向下
		if (row === 0) direction = true;
		// 9. 改变行数
		row = row + (direction ? 1 : -1);
	}
	// 10. 展开二维数组并转成字符串返回
	return [].concat(...sArr).join('');
};

console.log(convert('PAYPALISHIRING', 3));
