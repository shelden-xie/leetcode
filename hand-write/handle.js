const myNew = function () {
    const obj = {};
    const func = Array.prototype.shift.call(arguments);
    obj.__proto__ = func.prototype;
    const res = func.apply(obj, arguments);
    return res instanceof Object ? res : obj;
  };
  
  
  const objectCreate = function (fnn) {
    function fn(){}
    fn.prototype = fnn;
    return new fn() 
  };
  
  const instanceofself = function(left,right){
    if(left === null || typeof left !== 'object'){
      return false
    }
    const leftvalue = left.__proto__
    while(true){
      if(leftvalue === null) return false
      if(leftvalue === right.prototype) return true
      leftvalue = leftvalue.__proto__
    }
  }
  const curry = (fn)=>{
    return(fns = (...args)=>args.length === fn.length?fn(...args) :(...argss)=>fns(...args,...argss))()
  }
  // 参数是一个的为一元函数，两个的是二元函数
  // 柯里化可以把一个多元函数转化成一元函数
  function sum(a, b, c) {
    return a + b + c;
  }
  const sunmm = curry(sum);
  // console.log(sunmm(1,2)(3))
  
  
  
  Object.prototype[Symbol.iterator] = function(){
      let that  = this;
      let objects = Object.keys(this)
      let index = 0
      return {
          next(){
              return {
                  value:that[objects[index++]],
                  done:index>objects.length
              }
          }
      }
  }
  // let obj1 = {1:2,2:3,4:5}
  // for (const iterator of obj1) {
  //     console.log(iterator)
  // }
  
  const compose = (...args)=> args.reduce((prv,cur)=>(...argss)=>cur(prv(...argss)))
  
  // const compose = (...args) => args.reduce((pre, cur) => (...argss) => pre(cur(...argss)));
  
  
  // const add10 = (x) => x + 10;
  // const mul10 = (x) => x * 10;
  // const add100 = (x) => x + 100;
  
  // // (10 + 100) * 10 + 10 = 1110
  // let x = compose(add10, mul10, add100)(10);
  // console.log(x)
  
  
  
  
  
  const object = { a: [{ b: { c: 3 } }] };
  // //=> 3
  // get(object, "a[0].b.c");
  // //=> 3
  // get(object, 'a[0]["b"]["c"]');
  // //=> 10086
  // get(object, "a[100].b.c", 10086);
  const getself = (source,str,defaultValue)=>{
    if(typeof str !== "string") return 
    const text = str.replace(/\[(\w+)\]/g,'.$1').replace(/\["(.+?)"\]/g,".$1").replace(/\['(\w+)'\]/g,".$1").split('.')
    console.log(text)
    let result = source;
    for (const p of text) {
      result = result?.[p];
    }
    return result === undefined ? defaultValue : result;
  }
  let res = getself(object,'a[0]["b"]["c"]',10086);
  console.log(res)
  
  
  const maopao = (arr)=>{
    for (let index = 0; index < arr.length; index++) {
      for (let indexj = 0; indexj < arr.length-index-1; indexj++) {
        if(arr[indexj]>arr[indexj + 1]){
          [arr[indexj],arr[indexj+1]] = [arr[indexj + 1],arr[indexj]]
        }
      }
    }
    return arr
  }
  
  const l = maopao([3,44,2,4,54,66,82,45,7])
  // console.log(l)
  
  const xuanze = (arr)=>{
    let minindex = null
    for (let i = 0; i < arr.length-1; i++) {
      minindex = i
      for (let j = i+1; j < arr.length; j++) {
        if(arr[j]>arr[j+1]){
          minindex = j+1
        }
      }
      [arr[i],arr[minindex]] = [arr[minindex],arr[i]]
    }
    return arr
  }
  const l1 = maopao([3,44,2,4,54,66,82,45,7])
  console.log(l1)
  
  const kuaipai = (arr)=>{
  
  }
  
  
  // 只有一个匹配项 a: 匹配项、b: 索引、c: 原字符串
  var str = '20230130';
  var arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  str = str.replace(/\d/g, function (a, b, c) {
    console.log(a,b,c,arguments[0]);
      return arr[Number(arguments[0])]
  })