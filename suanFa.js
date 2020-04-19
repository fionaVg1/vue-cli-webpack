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

/**
 * 全排列
 */
var arr = [1, 2, 3, 4];

function calAll(arr, from) {
    if (from == arr.length - 1) {
        console.log(arr);
    }
    for (let i = from; i < arr.length; i++) {
        swap(arr, i, from);
        calAll(arr, from + 1);
        swap(arr, i, from);
    }
}

function swap(arr, i, from) {
    let temp = arr[i];
    arr[i] = arr[from];
    arr[from] = temp;
}
// calAll(arr, 0);

/**
 * 选择排序
 */
var arr = [2, 7, 9, 4, 6, 3];

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
selectSort(arr);
/**
 * 旋转字符串
 * abcdef
 */

/**
 * 字符串包含
 * A:abcdef  b:fbc  如何最快的判断B中所有字符都在A中包含
 */
/**
 * 字符串回文判断
 * madam就会一个回文字符串
 */
var str = 'abcdef';

function reverseString(strArr, from, to) {
    while (from < to) {
        let temp = strArr[from];
        strArr[from++] = strArr[to];
        strArr[to--] = temp;
    }
}

//旋转字符串的前n个字符
function rotateStr(str, num) {
    var strArr = str.split('');
    let to = strArr.length - 1;
    reverseString(strArr, 0, num - 1);
    reverseString(strArr, num, to);
    reverseString(strArr, 0, to);
    console.log(strArr.join(''));
}
rotateStr(str, 2);
//判断是否回文
var str2 = 'abmmba';

function huiWen(str) {
    var strArr = str.split('');
    reverseString(strArr, 0, strArr.length - 1);
    if (str == (strArr.join(''))) {
        console.log('回文');
    } else {
        console.log('没有回文');
    }
}
huiWen(str2);

//快速排序
let arr = [3,1,3,5,7,9,8];
function partion(arr,low,high){
    let privot = arr[low];
    while(low < high){
        while(low<high && arr[high]>privot){
            high--;
        }
        arr[low] = arr[high];
        while(low<high && arr[low]<= privot){
            low++;
        }
    }
    arr[low] = privot;
    return low;
}
function quickSort(arr,low,high){ 
    if(low<high){
        let index = partion(arr,low,high);
        quickSort(arr,0,index-1);
        quickSort(arr,index+1,high);
    }  
}
quickSort(arr,0,arr.length-1);