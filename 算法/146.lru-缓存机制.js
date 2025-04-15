class LRU {
  constructor(length){
      this.stack = new Map()
      this.length = length
  }
  get(key){//先判断是否存在这个key，有的话删除这个key，然后再添加这个key，并且返回这个key的值
      const datas = this.stack;
      if(!datas.has(key)){
          return -1
      }
      const keyValue = datas.get(key)
      datas.delete(key);
      datas.set(key,keyValue);  // 将访问过的键移到Map末尾，表示最近使用
      return keyValue;
  }
  put(key,value){//先判断是否存在这个key，有的话删除这个key，然后判断是否超出长度，超出长度的话删除第一个key，然后再添加这个key
      const datas = this.stack;
      if(datas.has(key)){
          datas.delete(key)
      }
      if(datas.size >= this.length){
          // 修正错误：原代码使用了未定义的map变量，应该使用datas
          const firstKey = datas.keys().next().value;  // 获取最久未使用的键（Map第一个键）
          datas.delete(firstKey);
      }
      datas.set(key,value)
  }
}
