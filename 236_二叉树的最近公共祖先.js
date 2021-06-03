// 236. 二叉树的最近公共祖先
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出：3
// 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 1. 初始化祖先元素
    let ans=null;
    // 2. 递归函数
    const dfs=(root, p, q)=>{
        // 3. root为null 返回false
        if(!root) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        // 4. 处理代码放在这是为了使用后序遍历
        // 4.1 lson&&rson p和q在root的左右子节点下 
        // 4.2 (root==p||root==q)&&(lson||rson) 说明p和q其中一个和root相等
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        } 
        // 5. 返回值 子节点返回true或者 自身等于p或q
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    // 6. 进行递归
    dfs(root,p,q)
    // 7. 返回结果
    return ans;
};

let p=new TreeNode(2);
let q=new TreeNode(3);
let root = new TreeNode(1);

root.left=p;
p.left=q;

console.log(lowestCommonAncestor(root,p,q));