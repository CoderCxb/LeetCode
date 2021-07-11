// 116. 填充每个节点的下一个右侧节点指针
// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 初始状态下，所有 next 指针都被设置为 NULL。

// 输入：root = [1,2,3,4,5,6,7]
// 输出：[1,#,2,3,#,4,5,6,7,#]
// 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。

//@ts-nocheck
function Node(val, left, right, next) {
	this.val = val === undefined ? null : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
	this.next = next === undefined ? null : next;
}

/**
 * @param {Node} left
 * @param {Node} right
 */
function connectTwoNode(left, right) {
	// 3. 当left或者right不存在时 return
	if (left === null || right === null) return;
	// 4. 连接左右节点
	left.next = right;
	// 5. 连接左右子节点
	connectTwoNode(left.left, left.right);
	connectTwoNode(right.left, right.right);
	// 6. 跨父级连接 即将left.right和right.left连接
	connectTwoNode(left.right, right.left);
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	// 1.特殊情况
	if (root === null) return root;
	// 2. 连接左右节点
	connectTwoNode(root.left, root.right);
	return root;
};

let root = new Node(1, new Node(2, null, null), new Node(2, null, null), null);

console.log(connect(root));
