// 11. 盛最多水的容器

// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

// 思路
// 设置start=0,end=length-1两个索引
// 保留height[start]和height[end]中长的那根 并且获取面积并和max比较 若面积大于max 则赋值给他
// 直到start==end时终止 

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	// 起点索引
	let start = 0;
	// 终点索引
	let end = height.length - 1;
	// 最大值
	let max = 0;
	while (end != start) {
		// 面积
		max=Math.max(Math.min(height[start], height[end]) * (end - start),max)
		// 若终点高度大于起点 则起点后移
		if (height[end] >= height[start]) {
			start++;
		} else {
			// 否则 终点后移
			end--;
		}
	}
	return max;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
