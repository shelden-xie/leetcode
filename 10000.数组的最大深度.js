var treeArr = {
  name: "root",
  child: [
    {
      name: "a",
      child: [
        {
          name: "b",
          child: [
            { name: "d" },
            {
              name: "e",
              child: [
                { name: "h" },
                {
                  name: "i",
                  child: [{ name: "j" }],
                },
              ],
            },
          ],
        },
        {
          name: "c",
          child: [
            { name: "f" },
            {
              name: "g",
              child: [
                { name: "k" },
                { name: "l" },
                { name: "m" },
                { name: "n" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

//递归方法计算拖拽时的层数
const getFloors = (root, onePathDeep, deepArr) => {
  //对root为null的情况特殊处理
  if (root != null) onePathDeep++;
  else return 0;
  if (
    root.child == null ||
    (Array.isArray(root.child) && root.child.length === 0)
  ) {
    //存下该条路径的深度
    deepArr.push(onePathDeep);
  } else {
    for (let i = 0; i < root.child.length; i++) {
        console.log(root.child[i], onePathDeep, deepArr)
      getFloors(root.child[i], onePathDeep, deepArr);
    }
  }
  //只有最终归到根节点时执行的该行返回值才会被外部接收
  //... 即是将[1,2,3]转为 1,2,3
  return Math.max(...deepArr);
};
console.log(getFloors(treeArr, 0, []));
