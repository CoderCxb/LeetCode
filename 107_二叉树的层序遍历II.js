// 107. 二叉树的层序遍历 II
// 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 二叉树：[3,9,20,null,null,15,7],
// 3
// / \
// 9  20
// /  \
// 15   7
// 返回其层序遍历结果：

// [
// [3],
// [9,20],
// [15,7]
// ]

// 思路: 使用数组存储每一层的节点 只要数组不为空 则说明该层还有节点  遍历数组,将数组中节点的左右子节点添加到数组,并删除遍历过的节点

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	// 1. 初始化
	let result = [];
	// 2. 特殊情况处理
	if (!root) return result;
	// 3. 创建节点数组 数组存储当前层的节点
	let childArr = [root];
	// 4. 数组长度不为0说明未结束
	while (childArr.length > 0) {
		// 5. 该层的值 (题目返回的是值 所以需要存储)
		const values = [];
		// 6. 因为不断在往数组添加 所以数组的长度会发生改变 因此需要提前存储
		let len = childArr.length;
		// 7. 遍历数组
		for (let index = 0; index < len; index++) {
			// 8. 获取节点
			let node = childArr[0];
			// 9. 获取值 并添加到value数组
			values.push(node.val);
			// 10. 判断左右节点是否存在 存在的话 将节点添加到节点数组中去
			if (node.left) {
				childArr.push(node.left);
			}
			if (node.right) {
				childArr.push(node.right);
			}
			// 11. 删除已经遍历过的节点
			childArr.shift();
		}
		// 12. 不断push 得到结果,push时(102) 从上往下,unshift时 从下往上
		result.unshift(values);
	}
	return result;
};

let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3, null, null), null),
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(levelOrder(root));
