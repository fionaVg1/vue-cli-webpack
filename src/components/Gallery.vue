<template>
    <div id="imgContent">

    </div>
</template>
<script>
    /**
     * 命令解析模块---生成dom节点--具体的渲染.
     * 
     *
     * */
    class Picture {
        constructor(options) {
            this.html = '';
            this.options = options;
            this.render();
        }
        initData() {
            //各大框架里面都有使用的东西--与默认属性合并
            //1.有些属性不需要用户提供
            //2.防止用户漏传入
            var final = {};
            var defaultOptions = {
                data: [],
                id: document,
                sort: 'normal',
                size: [100, 100]
            };
            //适配器模式
            for (let item in defaultOptions) {
                if (this.options[item]) {
                    final[item] = this.options[item];
                    if (item === 'id') {
                        final[item] = document.getElementById(this.options[item]);
                    }
                } else {
                    final[item] = defaultOptions[item];
                }
            }
            return final;
        }
        initDOM(finalOptions) {
            //需要样式
            var styleArr = [{
                //包裹图片div样式
                float: 'left',
                width: finalOptions.size[0] + 'px',
                height: finalOptions.size[1] + 'px',
                position: 'relative'

            }, {
                //下标顺序的样式
                position: 'absolute',
                bottom: '0px',
                right: '0px',
                background: 'black',
                color: 'white',
                padding: '10px',
                width: '10px',
                height: '10px'

            }, {
                //图片样式
                width: '100%',
                height: '100%'
            }];
            var wraper = document.createElement('div');
            //排序图片
            //用策略模式
            var commanderHandle = {
                normal: function(arr) {
                    return arr;
                },
                reverse: function(arr) {
                    return arr.reverse();
                }
            }
            var data = commanderHandle[finalOptions.sort](finalOptions.data);
            data.forEach((url, index) => {
                var div = document.createElement('div');
                var img = document.createElement('img');
                var span = document.createElement('span');
                var styleObj = null;
                var handleDom = null;
                styleArr.forEach((style, index) => {
                    //享元模式
                    switch (index) {
                        case 0:
                            handleDom = div;
                            break;
                        case 1:
                            handleDom = span;
                            break;
                        case 2:
                            handleDom = img;
                            break;
                    }
                    for (var styleName in style) {
                        handleDom.style[styleName] = style[styleName];
                    }
                });
                img.setAttribute('src', url);
                div.appendChild(img);
                span.innerHTML = index + 1;
                div.appendChild(span);
                wraper.appendChild(div);
            });
            this.html = wraper;
        }
        renderDOM(element) {
            element.appendChild(this.html);
        }
        render() {
            var order = this.initData();
            this.initDOM(order);
            this.renderDOM(order.id);
        }
    }
    export default {
        name: 'Gallery',
        mounted() {
            var options = {
                id: 'imgContent',
                data: ['./static/img/1.jpg', './static/img/2.jpg', './static/img/3.jpg', './static/img/4.jpg', './static/img/5.jpg', './static/img/6.jpg']
            }
            var pic = new Picture(options);
        }
    }
</script>