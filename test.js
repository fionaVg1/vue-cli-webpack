// 字符串由六个字符'{'、'}'、'['、']'、'('、')'随机组成，通过一个方法判断该字符串能否全部配对。如'{[()]}'、'[{}]()'能够配对，'[{})'、'{( })'无法配对。提示：字符串先转成数组
function isMatch(string) {
    var tagArr = [];
    var strArr = string.split('');
    for (let s of strArr) {
        if (s === '{') {
            tagArr.push('}');
        } else if (s === '[') {
            tagArr.push(']');
        } else if (s === '(') {
            tagArr.push(')');
        } else if (tagArr.pop() !== s) {
            return false;
        }
    }
    return true;
}
isMatch('{([])}'); //true
isMatch('[{]}'); //false