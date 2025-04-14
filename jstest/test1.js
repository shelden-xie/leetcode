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

