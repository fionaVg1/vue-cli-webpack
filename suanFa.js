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
 * 冒泡排序
 */
var arr = [2, 7, 9, 4, 6, 3];

function bubbleSort(arr) {
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
bubbleSort(arr);

/**
 * 选择排序
 */
var arr = [2, 7, 9, 4, 6, 3];

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
selectSort(arr);

/**
 * 插入排序
 */
var arr = [2, 7, 9, 4, 6, 3];

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var preIndex = i - 1;
        var current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
}
insertSort(arr);
//计数排序
var arr = [2, 5, 3, 0, 2, 3, 0, 3];

function countSort(arr, maxValue) {
    var bucketLen = maxValue + 1;
    var sortIndex = 0;
    var bucket = new Array(bucketLen);
    for (let j = 0; j < arr.length; j++) {
        if (!bucket[arr[j]]) {
            bucket[arr[j]] = 0;
        }
        bucket[arr[j]]++;
    }
    for (let i = 0; i < bucketLen; i++) {
        while (bucket[i] > 0) {
            arr[sortIndex++] = i;
            bucket[i]--;
        }

    }
    return arr;
}
countSort(arr, 5);
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