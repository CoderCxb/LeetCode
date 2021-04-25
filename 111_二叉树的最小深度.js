// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// 思路: 通过层序遍历, 当节点为叶子节点时,查看层数,并和原先最小值比较

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
	// 1. 初始化
	let min = Number.MAX_VALUE,
		level = 0;
	// 2. 特殊情况处理
	if (!root) return 0;
	// 3. 创建节点数组 数组存储当前层的节点
	let childArr = [root];
	// 4. 数组长度不为0说明未结束
	while (childArr.length > 0) {
		// 5. 层数++
		level++;
		// 6. 因为不断在往数组添加 所以数组的长度会发生改变 因此需要提前存储
		let len = childArr.length;
		// 7. 遍历数组
		for (let index = 0; index < len; index++) {
			// 8. 获取节点
			let node = childArr[0];
			// 9. 判断左右节点是否存在 存在的话 将节点添加到节点数组中去
			if (node.left) {
				childArr.push(node.left);
			}
			if (node.right) {
				childArr.push(node.right);
			}
			// 10 节点为叶子节点时
			if (!node.left && !node.right) {
				min = Math.min(min, level);
			}
			// 11. 删除已经遍历过的节点
			childArr.shift();
		}
	}
	return min;
};

let root = new TreeNode(
	1,
	new TreeNode(
		2,
		new TreeNode(3, new TreeNode(4, new TreeNode(5, null, null), null), null),
		null
	),
	null
);
console.log(minDepth(root));
