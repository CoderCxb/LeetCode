// 42. 接雨水

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

// 思路:双指针解法,计算该位置能接多少水，取决于一侧最大值与另一侧的更大值(比另一侧的最大值大即可,是不是最大值无所谓),指针从左右两侧开始移动，左右两边不断计算最大值，哪边的最大值小，则哪边移动，如左侧最大值>右侧最大值,则right--,并计算该点能接多少水,即(max-height)

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	// 1. 特殊情况
	if (!height || height.length === 0) return 0;
	// 2. 初始化
	let result = 0,
		len = height.length,
		left = 0,
		right = len - 1,
		lMax = height[0],
		rMax = height[right];
	// 3. 判断条件
	while (left <= right) {
		// 4. 需要在计算result前先计算最大值 否则计算结果会错
		// 4.1 左侧最大值
		lMax = Math.max(lMax, height[left]);
		// 4.2 右侧最大值
		rMax = Math.max(rMax, height[right]);
		// 5. 左侧最大值<右侧最大值
		if (lMax < rMax) {
			// 5.1 计算结果
			result += lMax - height[left];
			// 5.2 移动
			left++;
			// 6. 右侧最大值>=左侧最大值
		} else {
			// 6.1 计算结果
			result += rMax - height[right];
			// 6.2 移动
			right--;
		}
	}
	return result;
};
console.log(trap([5, 3, 6, 1, 2, 3, 2, 4, 1]));
