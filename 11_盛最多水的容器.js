// 11. 盛最多水的容器

// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let start = 0;
	let end = height.length - 1;
	let max = 0;
	while (end != start) {
		let area = Math.min(height[start], height[end]) * (end - start);
		if (area >= max) {
			max = area;
			if (area == max) {
				// if()
			}
		} else {
			end--;
		}
		console.log(start, end);
	}
	return max;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
