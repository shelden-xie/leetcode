const arr = [
    {
      key: "x",
      value: 2,
      children: [
        { key: "x", value: 4 },
        { key: "x", value: 4 },
      ],
    },
    { key: "x", value: 2 },
    { key: "x", value: 3 },
  ];
  
  const splitArr = (arr) => {
    const maps = new Map();
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element.children) {
        maps.set(element.value, element);
        element.children = splitArr(element.children);
      } else if (!maps.has(element.value)) {
        maps.set(element.value, element);
      }
    }
    return Array.from(maps.values());
  };
  
  console.log(JSON.stringify(splitArr(arr),null,2));