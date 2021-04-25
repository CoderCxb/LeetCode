// 112. 路径总和
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

// 叶子节点 是指没有子节点的节点。

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true

// 思路: 通过递归遍历树，递归函数传入当前节点和到当前节点的value和,不断的累加,到叶子节点的时候 判断结果

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	// 1.初始化 默认结果false
	let result = false;
	// 2. 递归函数
	function recursive(root, nowSum) {
		// 3. 特殊情况直接返回
		if (!root) return;
		// 4. 到当前节点value的和
		nowSum += root.val;
		// 5. 左节点存在
		if (root.left) {
			recursive(root.left, nowSum);
		}
		// 6. 右节点存在
		if (root.right) {
			recursive(root.right, nowSum);
		}
		// 7. 叶子节点
		if (!root.left && !root.right) {
			if (nowSum === targetSum) {
				result = true;
			}
		}
	}
	// 8. 调用递归函数
	recursive(root, 0);
	// 9. 返回值
	return result;
};

let root = new TreeNode(
	1,
	new TreeNode(
		2,
		new TreeNode(8, new TreeNode(4, new TreeNode(5, null, null), null), null)
	),
	new TreeNode(
		2,
		new TreeNode(8, new TreeNode(4, new TreeNode(5, null, null), null), null)
	)
);
console.log(hasPathSum(root, 20));
