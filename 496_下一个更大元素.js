// 496. 下一个更大元素 I
// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。

// 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

// 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出: [-1,3,-1]
// 解释:
//     对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。
//     对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。
//     对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。

// 输入: nums1 = [2,4], nums2 = [1,2,3,4].
// 输出: [3,-1]
// 解释:
//     对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
//     对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。

// 思路:使用队列,每当一个值进入的时候，判断这个值和队列的最后一个值的关系,如果这个值比队列最后一个值大,那么这个值就是队列最后一个值的更大值,然后pop,并且使用while继续判断，直到队列为空或者当前值<队列的最后一个值

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	// 1. map用于存储 nums2中每一个数字以及它的下一个更大数字
	// 使用map或者hash存储 主要是为了时间复杂度下降 不需要再遍历获取
	let map = {};
	// 2. 队列
	let queue = [];
	// 3. 遍历
	for (let index = 0; index < nums2.length; index++) {
		let num = nums2[index];
		// 4. 当队列不为空 并且 num>队列的最后一个元素时
		while (queue.length !== 0 && num > queue[queue.length - 1]) {
			// 5. 设置map[队列最后一个元素]=num 即 设置队列最后一个元素的下一个更大值
			// 6. 删除队列的最后一个元素
			map[queue.pop()] = num;
		}
		// 7. while结束 要么数组为空 要么这个num<队列的最后一个值 将num添加到队列
		queue.push(num);
	}
	// 8. 返回结果
	return nums1.map((num) => (map[num] ? map[num] : -1));
};

console.log(nextGreaterElement([4, 1, 2], [2, 1, 2, 4, 3, 2]));
console.log(nextGreaterElement([2, 3], [1, 2, 3, 10]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
