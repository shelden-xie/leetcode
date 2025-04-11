const arr = [3,9,20,null,null,15,7];
class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
const treeTArray = (arr,index=0)=>{
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