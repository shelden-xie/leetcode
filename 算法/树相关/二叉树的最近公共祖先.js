/*
 * @Author: xieyadong xieyadong@58.com
 * @Date: 2025-04-15 07:29:51
 * @LastEditors: xieyadong xieyadong@58.com
 * @LastEditTime: 2025-04-15 08:04:40
 * @FilePath: /leetcode/算法/二叉树的最近公共祖先.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 题目描述： 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

最近公共祖先的定义为："对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。"

示例 1： 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 输出：3 解释：节点 5 和节点 1 的最近公共祖先是节点 3。

示例 2： 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 输出：5 解释：节点 5 和节点 4 的最近公共祖先是节点 5（因为根据定义，一个节点可以是它自己的祖先）。

注意：

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉树中。
 */
import { treeTArray } from "./普通数组转化二叉树.js";
const tree = treeTArray(null,0);
const p = 5;
const q = 1;

const lowestCommonAncestor = function (root, p, q) {
    if(!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    return left || right;
}

