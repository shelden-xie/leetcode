/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (75.52%)
 * Likes:    1218
 * Dislikes: 0
 * Total Accepted:    639.8K
 * Total Submissions: 846.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [1,2]
 * 输出：[2,1]
 *
 *
 * 示例 5：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100
 *
 *
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const obj = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

let preorderTraversal = (root, arr = []) => {
  const stack = [],
    res = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      res.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  console.log(res)
  return res;
};

preorderTraversal(obj,[])
// var inorderTraversal = function(root) {

// };
// @lc code=end


// 后续遍历
// ... 前序和中序遍历代码保持不变 ...

// 后序遍历非递归实现（使用标记法）
let postorderTraversal = (root) => {
  const stack = [], res = [];
  let current = root;
  let lastVisited = null; // 记录上次访问的节点
  
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left; // 先遍历左子树
    }
    current = stack[stack.length - 1]; // 查看栈顶元素但不弹出
    if (!current.right || current.right === lastVisited) {
      // 如果没有右子树或右子树已访问过
      res.push(current.val); // 访问节点值
      lastVisited = stack.pop(); // 记录最后访问的节点
      current = null; // 当前节点置空
    } else {
      current = current.right; // 否则遍历右子树
    }
  }
  return res;
};

// 测试后序遍历
postorderTraversal(obj)