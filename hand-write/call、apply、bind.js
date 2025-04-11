Function.prototype.testCall = function(ctx, ...args) {
//   ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx);
  const key = Symbol("key");
  const that = this;
  Object.defineProperty(ctx, key, {
    enumerable: false, // 只读
    value: that, // 值
  });
  const res = ctx[key](...args);
  delete ctx[key];
  return res;
};

function method(a, b) {
  console.log(this, a, b);
  return a + b;
}

const test = {
  a: 1,
  b: 2,
};

method.testCall(test, 3, 4);
console.log(method.testCall(test, 3, 4)); // 返回值：7

const myapply = function (ctx, ...args)  {
  const key = Symbol("key");
  ctx[key] = this;
  const res = ctx[key]([...args]);
  delete ctx[key];
  return res;
};

// const mybind = () => {};
