// 503. 下一个更大元素 II
// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

// 示例 1:

// 输入: [1,2,1]
// 输出: [2,-1,2]
// 解释: 第一个 1 的下一个更大的数是 2；
// 数字 2 找不到下一个更大的数；
// 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (nums) {
	let map = {};
	let queue = [];
	let result = [];
	for (let index = 0; index < nums.length; index++) {
		let num = nums[index];
		// 4. 当队列不为空 并且 num>队列的最后一个元素时
		while (queue.length !== 0 && num > nums[queue[queue.length - 1]]) {
			// 5. 设置map[队列最后一个元素]=num 即 设置队列最后一个元素的下一个更大值
			// 6. 删除队列的最后一个元素
			// map[queue.pop()] = num;
			result[queue.pop()] = num;
		}
		// 7. while结束 要么数组为空 要么这个num<队列的最后一个值 将num添加到队列
		queue.push(index);
	}
	console.log(map);
	console.log(result);
	// 8. 返回结果
	return nums.map((num) => (map[num] ? map[num] : -1));
};

console.log(nextGreaterElement([1, 2, 1]));
console.log(nextGreaterElement([100, 1, 11, 1, 120, 111, 123, 1, -1, -100]));
