/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (76.39%)
 * Likes:    1842
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 1.7M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树 root ，返回其最大深度。
 *
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数量在 [0, 10^4] 区间内。
 * -100 <= Node.val <= 100
 *
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
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const arr = [3, 9, 20, null, null, 15, 7];

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
const treeTArray = (arr, index = 0) => {
  if (!arr[index] || index > arr.length - 1) return null;
  const tree = new TreeNode(arr[index]);
  tree.left = treeTArray(arr, index * 2 + 1);
  tree.right = treeTArray(arr, index * 2 + 2);
  return tree;
};
const tree = treeTArray(arr, 0);

console.log(tree);
// // dfs 深度优先遍历，递归法，边界是root不存在，如果遍历左子树，就沿着左子树一直遍历下去，右子树同理，
// // 直到递归边界终止开始向上输出，所以就是：Math.max(left,right) + 1，
// //图片：https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f74a34060c234cd3a5e23f6a8ff890c1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   } else {
//     let left = maxDepth(root.left);
//     let right = maxDepth(root.right);
//     return Math.max(left, right) + 1;
//   }
// };

// // bfs层序遍历，利用出栈和进栈
// const maxDepth2 =  (root)=> {
//   if (root == null) return 0;
//   const queue = [root];
//   let deep = 1;
//   while (queue.length) {
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const cur = queue.shift();
//       if (cur.left) queue.push(cur.left);
//       if (cur.right) queue.push(cur.right);
//     }
//     if (queue.length) deep+=1;
//   }
//   return deep;
// };

// console.log(maxDepth2(tree));
// // @lc code=end



const treeMaxDepth = (root) => {
  if(!root) return 0;
  let deep = 0;
  let queue = [root];
  while(queue.length){
      for(var i = 0; i<=queue.length-1;i++){
          if(queue[i].left) queue.push(queue[i].left);
          if(queue[i].right) queue.push(queue[i].right);
          queue.shift();
      }
      deep++;
  }
  return deep;
}

console.log(treeMaxDepth(tree))