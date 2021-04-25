// 113. 路径总和 II

// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var hasPathSum = function (root, targetSum) {
	// 1. 初始化 默认结果false
	let result = [];
	// 2. 递归函数
	function recursive(root, sum, pathArr) {
		// 3. 特殊情况返回
		if (!root) return;
		// 4. 路径节点
		pathArr.push(root.val);
		// 5. 求和
		sum += root.val;
		// 6. 叶子节点
		if (!root.left && !root.right) {
			if (sum === targetSum) {
				// 7. 注意:不能直接push(pathArr) 因为这样push的是引用  所以都会是同一个数组 并且会被后面的操作影响
				result.push(pathArr);
			}
		} else {
			// 8. 递归左右节点
			recursive(root.left, sum, pathArr.slice());
			recursive(root.right, sum, pathArr.slice());
		}
	}
	// 8. 调用递归函数
	recursive(root, 0, []);
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
