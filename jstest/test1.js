const bt = {
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:{
            val:5,
            left:null,
            right:null
        }
    },
    right:{
        val:3,
        left:{
            val:6,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}

// 递归版本实现
const postOrder1 = (root) => {
    if(!root){
        return;
    }
    postOrder1(root.left);
    postOrder1(root.right);
    console.log(root.val);
}

postOrder1(bt);
/**打印结果：
1
2
4
5
3
6
7
*/
