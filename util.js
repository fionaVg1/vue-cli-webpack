/**
 *移动端1px处理
 * rem + devicePixelRatio + meta方案
 */
function dealWithMobile1Px(){    
    var docEl = document.documentElement;
    var fontsize = 12*window.devicePixelRatio + 'px';
    docEl.style.fontSize = fontsize;
    var viewport = document.querySelector("meta[name=viewport]");
    //下面是根据设备像素设置viewport
    if (window.devicePixelRatio == 1) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    }
    if (window.devicePixelRatio == 2) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
    }
    if (window.devicePixelRatio == 3) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
    }
}
//dealWithMobile1Px();
var begin;
let btn = document.getElementById('mybtn');
btn.onclick = function(event){
    console.log('---use time'+(new Date().getTime()-begin));
}
begin = new Date().getTime();
btn.click();
document.getElementById('myLable').onclick = function(event){
    console.log('label click........')
}

