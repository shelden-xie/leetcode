// function add(num1, num2) {
//     // 使用更精确的小数位数计算方法
//     const getPrecision = num => {
//         const str = num.toString().toLowerCase();
//         const decimalIndex = str.indexOf('.');
//         console.log(str, decimalIndex,str.split('e')[0])
//         return decimalIndex === -1 ? 0 : str.split('e')[0].length - decimalIndex - 1;
//     };

//     const maxPrecision = Math.max(getPrecision(num1), getPrecision(num2));
//     const baseNum = 10 ** maxPrecision; // 改用ES6指数运算符

//     return (Math.round(num1 * baseNum) + Math.round(num2 * baseNum)) / baseNum;
// }
// add(0.1, 0.2)


// demo03
var a = 20;
var obj = {
    a: 10,
    c: this.a + 20,
    fn: function () {
        return this.a;
    }
}

console.log(obj.c); // 这里的this指向window是因为对象字面量中的this在定义时就已经确定了，它指向全局对象（浏览器中是window）。对象字面量中的属性值计算是在创建对象时进行的，此时this还不指向obj本身。
console.log(obj.fn()); // 这里this指向obj是因为fn是作为obj的方法被调用的，方法中的this指向调用它的对象

