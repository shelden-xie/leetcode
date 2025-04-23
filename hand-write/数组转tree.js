/**
 * 
 * 编码三: 根据pid，将数组处理成以下 tree结构（ok)
const arr =[
{id: 2, title:'部门2' pid: 1}
{id: 3, title:'部门3, pid: 1}
{id: 1, title:'部门1, pid: 0}
{id: 4, title:'部门 4' pid: 3}
{id: 5, title: '部门 5' pid: 4}
]
*



面试题：构建并优化嵌套菜单树

给定一个表示菜单项的数组，每个菜单项可能包含子菜单。请编写一个函数，该函数接收此数组作为输入，并返回一个嵌套的对象结构，表示这些菜单和子菜单的层级关系。同时，考虑性能优化，确保在处理大型菜单时函数仍然高效。

输入数组示例：

const menuItems = [
  { id: 1, name: 'Home', parentId: null },
  { id: 2, name: 'Products', parentId: null },
  { id: 3, name: 'Laptops', parentId: 2 },
  { id: 4, name: 'Desktops', parentId: 2 },
  { id: 5, name: 'Accessories', parentId: 2 },
  { id: 6, name: 'Mouse', parentId: 5 },
  { id: 7, name: 'Keyboard', parentId: 5 },
  { id: 8, name: 'About Us', parentId: null },
  { id: 9, name: 'Contact Us', parentId: null },
  // ... 可能还有更多菜单项
];

期望的输出是一个嵌套对象，如下所示：

{
  "Home": {},
  "Products": {
    "Laptops": {},
    "Desktops": {},
    "Accessories": {
      "Mouse": {},
      "Keyboard": {}
    }
  },
  "About Us": {},
  "Contact Us": {}
  // ... 对应的嵌套结构
}

要求：

编写一个函数buildMenuTree，它接受menuItems数组作为参数，并返回上述嵌套对象。
考虑性能因素，确保在处理大量菜单项时，你的解决方案仍然高效。
函数应正确处理任何有效的输入，包括空数组或具有复杂嵌套关系的菜单项。

---

 */


console.log(transformtree(arr))