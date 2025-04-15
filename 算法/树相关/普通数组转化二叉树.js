/*
 * @Author: xieyadong xieyadong@58.com
 * @Date: 2025-04-15 06:41:24
 * @LastEditors: xieyadong xieyadong@58.com
 * @LastEditTime: 2025-04-15 07:58:00
 * @FilePath: /leetcode/算法/树相关/普通数组转化二叉树.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
export const treeTArray = (arr = [3,9,20,null,null,15,7],index=0)=>{
    if(!arr[index] ||index > arr.length-1) return null;
    const tree= new TreeNode(arr[index]); 
    tree.left = treeTArray(arr,index*2 + 1)
    tree.right = treeTArray(arr,index*2 + 2)
    return tree
}

const tree = treeTArray(arr,0)

console.log(tree)

const arrayTtree = (tree)=>{

}