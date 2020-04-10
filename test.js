var arr = [1, 5, 6, 9, 10, 15];
/**
 * 
 * @param {*} arr  源数组
 * @param {*} n 从数组中随机选取n个数
 * 思路：随机的调换0-n序列号位置的值
 */
function sample(arr, n) {
    if (!(arr instanceof Array)) {
        throw new Error('请输入数组类型');
    }
    let len = arr.length;
    if (isNaN(n) || n > arr.length) {
        throw new Error('请输入合理的选择多少个随机数的值');
    }
    //浅拷贝，避免对源数组造成污染
    //以下两种方式都可以
    var shadowArr = [];
    // shadowArr = arr.slice(0);
    Object.assign(shadowArr, arr);
    for (let i = 0; i < n; i++) {
        let randomIndex = Math.floor(Math.random() * len);
        let tmp = shadowArr[i];
        shadowArr[i] = shadowArr[randomIndex];
        shadowArr[randomIndex] = tmp;
    }
    return shadowArr.slice(0, n);
}
var result = sample(arr, 3);
console.log(result);
console.log(arr);