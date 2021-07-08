// 118. 杨辉三角
// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 输入: 5
// 输出:
// [
//  [1],
//  [1,1],
//  [1,2,1],
//  [1,3,3,1],
//  [1,4,6,4,1],
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	// 1. 初始化
	let result = Array(numRows);
	// 2. 遍历
	for (let i = 0; i < numRows; i++) {
		// 3. 初始化 行Row
		result[i] = [];
		// 4. 为每行添加元素
		for (let j = 0; j <= i; j++) {
			// 5. 记录上一行
			let preRow = result[i - 1];
			// 6. 上一行不存在 此时为第一行
			if (preRow === undefined) {
				result[i].push(1);
				// 7. 当前元素的计算
			} else {
				let lt = preRow[j - 1]; // 左上
				let rt = preRow[j]; // 右上(正上)
				result[i].push((lt ? lt : 0) + (rt ? rt : 0));
			}
		}
	}
	return result;
};

console.log(generate(0));
